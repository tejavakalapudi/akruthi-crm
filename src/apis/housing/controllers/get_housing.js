import crypto from 'crypto';
import https from 'https';
import querystring from 'querystring';
import config from '../../../config/env';

const getHousingLeads = async (req, res, next) => {
  const params = {
    start_date: (new Date(2020, 3, 26).getTime() / 1000).toString(),
    end_date: (new Date(2020, 7, 26).getTime() / 1000).toString(),
    current_time: (new Date().getTime() / 1000).toString(),
    hash: crypto
      .createHmac('sha256', config.HOUSING_KEY)
      .update((new Date().getTime() / 1000).toString())
      .digest('hex'),
    id: 4728531,
  };

  https
    .get(`https://leads.housing.com/api/v0/get-builder-leads?${querystring.stringify(params)}`, resp => {
      let data = '';
      resp.on('data', chunk => {
        data += chunk;
      });
      resp.on('end', () => {
        return res.send(JSON.parse(data));
      });
    })
    .on('error', err => {
      return next(err);
    });
};

export default getHousingLeads;
