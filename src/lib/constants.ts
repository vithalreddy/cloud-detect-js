export const AWS = {
  metaDataUrl:
    'http://169.254.169.254/latest/dynamic/instance-identity/document',
  vendorFile: '/sys/class/dmi/id/product_version'
};

export const GCP = {
  headers: { 'Metadata-Flavor': 'Google' },
  metaDataUrl:
    'http://metadata.google.internal/computeMetadata/v1/instance/tags',
  vendorFile: '/sys/class/dmi/id/product_name'
};

export const AZURE = {
  headers: { Metadata: 'true' },
  metaDataUrl:
    'http://169.254.169.254/metadata/instance?api-version=2017-12-01',
  vendorFile: '/sys/class/dmi/id/sys_vendor'
};

export const DO = {
  metaDataUrl: 'http://169.254.169.254/metadata/v1.json',
  vendorFile: '/sys/class/dmi/id/sys_vendor'
};

export const ORACLE = {
  metaDataUrl: 'http://169.254.169.254/opc/v1/instance/metadata/',
  vendorFile: '/sys/class/dmi/id/chassis_asset_tag'
};

export const ALIBABA = {
  metaDataUrl: 'http://100.100.100.200/latest/meta-data/instance/instance-type',
  vendorFile: '/sys/class/dmi/id/product_name'
};
