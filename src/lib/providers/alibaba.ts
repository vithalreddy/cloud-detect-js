import axios from 'axios';
import path from 'path';

import { existsSync, readFileSync } from 'fs';

import { ALIBABA } from '../constants';
import debugLog from '../logger';

export default class AlibabaProvider implements CloudProvider {
  public async identify() {
    const result =
      (await this.checkMetadataServer()) || (await this.checkVendorFile());
    return result;
  }

  public async checkMetadataServer() {
    try {
      const response = await axios.get(ALIBABA.metaDataUrl);
      const data = response.data || {};

      if (data && data.toString().startsWith('ecs.')) {
        return true;
      }
    } catch (error) {
      debugLog(error);
    }
    return false;
  }

  public async checkVendorFile() {
    try {
      const filePath = path.resolve(ALIBABA.vendorFile);
      const fileExists = existsSync(filePath);

      if (fileExists) {
        const fileContent: string = readFileSync(filePath, 'utf8');
        if (fileContent.indexOf('Alibaba Cloud') > -1) {
          return true;
        }
      }
    } catch (error) {
      debugLog(error);
    }

    return false;
  }
}
