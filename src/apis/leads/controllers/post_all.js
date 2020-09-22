// https://medium.com/ecmastack/uploading-files-with-react-js-and-node-js-e7e6b707f4ef
import Papa from 'papaparse';
import fs from 'fs';
import LeadSchema from '../schemas/lead';
import { LEAD_SCHEMA_NAME } from '../../../constants/schemas';
import { getModelByClient } from '../../../config/mongo';

const parseData = req => {
  let leads = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(req.file.path)
      .pipe(
        Papa.parse(Papa.NODE_STREAM_INPUT, {
          header: true,
          skipEmptyLines: true,
        })
      )
      .on('data', data => {
        leads = [
          ...leads,
          {
            customer_name: data.Name,
            notes: [
              {
                text: data.Query,
                source: 'Housing.com',
              },
              {
                text: `Interested in ${data['Interested in']}`,
                source: 'Housing.com',
              },
            ],
            contact: data['Contact No.'],
            email: data['Email Id'],
            source: 'Housing.com',
          },
        ];
      })
      .on('end', () => {
        fs.unlinkSync(req.file.path);
        resolve(leads);
      })
      .on('error', () => {
        fs.unlinkSync(req.file.path);
        reject();
      });
  });
};

const uploadLeads = async (req, res, next) => {
  try {
    const results = await parseData(req);
    const leadModel = await getModelByClient(LEAD_SCHEMA_NAME, LeadSchema);
    try {
      const response = await leadModel.insertMany(results, { ordered: false });
      return res.send(response);
    } catch (error) {
      if (error.code === 11000) {
        return res.send(error.result);
      }
      return next(error);
    }
  } catch (error) {
    return next(error);
  }
};
export default uploadLeads;
