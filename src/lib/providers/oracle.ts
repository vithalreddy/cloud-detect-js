import axios from 'axios';
import path from 'path';

import { existsSync, readFileSync } from 'fs';

import { ORACLE } from '../constants';
import debugLog from '../logger';

export default class OracleProvider implements CloudProvider {
  public async identify() {
    const result =
      (await this.checkMetadataServer()) || (await this.checkVendorFile());
    return result;
  }

  private async checkMetadataServer() {
    try {
      const response = await axios.get(ORACLE.metaDataUrl);
      const data = response.data || {};
      const { OkeTM } = data;
      if (OkeTM && OkeTM.startsWith('oke')) {
        return true;
      }
    } catch (error) {
      debugLog(error);
    }
    return false;
  }

  private async checkVendorFile() {
    try {
      const filePath = path.resolve(ORACLE.vendorFile);
      const fileExists = existsSync(filePath);

      if (fileExists) {
        const fileContent: string = readFileSync(filePath, 'utf8');
        if (fileContent.indexOf('OracleCloud') > -1) {
          return true;
        }
      }
    } catch (error) {
      debugLog(error);
    }

    return false;
  }
}
