import axios from 'axios';
import path from 'path';

import { existsSync, readFileSync } from 'fs';

import { AWS } from '../constants';
import debugLog from '../logger';

export default class AWSProvider implements CloudProvider {
  public async identify() {
    const result =
      (await this.checkMetadataServer()) || (await this.checkVendorFile());
    return result;
  }

  private async checkMetadataServer() {
    try {
      const response = await axios.get(AWS.metaDataUrl);
      const data = response.data || {};

      const { ImageID, InstanceID } = data;
      if (ImageID && ImageID.startsWith('ami-')) {
        return true;
      }
      if (InstanceID && InstanceID.startsWith('i-')) {
        return true;
      }
    } catch (error) {
      debugLog(error);
    }
    return false;
  }

  private async checkVendorFile() {
    try {
      const filePath = path.resolve(AWS.vendorFile);
      const fileExists = existsSync(filePath);

      if (fileExists) {
        const fileContent: string = readFileSync(filePath, 'utf8');
        if (fileContent.indexOf('amazon') > -1) {
          return true;
        }
      }
    } catch (error) {
      debugLog(error);
    }

    return false;
  }
}
