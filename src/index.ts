import {
  AlibabaProvider,
  AWSProvider,
  AzureProvider,
  DOProvider,
  GCPProvider,
  OracleProvider
} from './lib/providers';

export async function cloudProvider(
  excluded: CloudProviders[] = []
): Promise<CloudProviders> {
  if (!excluded.includes('aws')) {
    const aws = new AWSProvider();
    if (await aws.identify()) {
      return 'aws';
    }
  } else if (!excluded.includes('gcp')) {
    const gcp = new GCPProvider();
    if (await gcp.identify()) {
      return 'gcp';
    }
  } else if (!excluded.includes('azure')) {
    const azure = new AzureProvider();
    if (await azure.identify()) {
      return 'azure';
    }
  } else if (!excluded.includes('do')) {
    const digitalOcean = new DOProvider();
    if (await digitalOcean.identify()) {
      return 'do';
    }
  } else if (!excluded.includes('alibaba')) {
    const alibaba = new AlibabaProvider();
    if (await alibaba.identify()) {
      return 'alibaba';
    }
  } else if (!excluded.includes('oracle')) {
    const oracle = new OracleProvider();
    if (await oracle.identify()) {
      return 'oracle';
    }
  }

  return 'unknown';
}
