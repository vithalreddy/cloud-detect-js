import axios from 'axios';
import path from 'path';

import { existsSync, readFileSync } from 'fs';

import { GCP } from '../constants';
import debugLog from '../logger';

export default class GCPProvider implements CloudProvider {
  public async identify() {
    const result =
      (await this.checkMetadataServer()) || (await this.checkVendorFile());
    return result;
  }

  private async checkMetadataServer() {
    try {
      await axios.get(GCP.metaDataUrl, { headers: GCP.headers });
      return true;
    } catch (error) {
      debugLog(error);
    }
    return false;
  }

  private async checkVendorFile() {
    try {
      const filePath = path.resolve(GCP.vendorFile);
      const fileExists = existsSync(filePath);

      if (fileExists) {
        const fileContent: string = readFileSync(filePath, 'utf8');
        if (fileContent.indexOf('Google') > -1) {
          return true;
        }
      }
    } catch (error) {
      debugLog(error);
    }

    return false;
  }
}
