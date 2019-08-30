interface CloudProvider {
  identify(): Promise<boolean>;
}

declare type CloudProviders =
  | 'aws'
  | 'gcp'
  | 'azure'
  | 'do'
  | 'oracle'
  | 'alibaba'
  | 'unknown';
