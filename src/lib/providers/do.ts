import axios from 'axios';
import path from 'path';

import { existsSync, readFileSync } from 'fs';

import { DO } from '../constants';
import debugLog from '../logger';

export default class DOProvider implements CloudProvider {
  public async identify() {
    const result =
      (await this.checkMetadataServer()) || (await this.checkVendorFile());
    return result;
  }

  private async checkMetadataServer() {
    try {
      const response = await axios.get(DO.metaDataUrl);
      const data = response.data || {};

      const { droplet_id } = data;

      if (droplet_id && droplet_id > 0) {
        return true;
      }
    } catch (error) {
      debugLog(error);
    }
    return false;
  }

  private async checkVendorFile() {
    try {
      const filePath = path.resolve(DO.vendorFile);
      const fileExists = existsSync(filePath);

      if (fileExists) {
        const fileContent: string = readFileSync(filePath, 'utf8');
        if (fileContent.indexOf('DigitalOcean') > -1) {
          return true;
        }
      }
    } catch (error) {
      debugLog(error);
    }

    return false;
  }
}
