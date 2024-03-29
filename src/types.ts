export interface UserData {
  user_id:        string;
  email:          string;
  name:           string;
  picture:        string;
  email_verified: boolean;
  user_metadata:  UserMetadata;
  last_login:     Date | string;
  given_name:     null;
  family_name:    null;
  blocked:        boolean;
}

export interface UserMetadata {
  role: number | string;
  org:  string;
}

// ORGANISATION 

export interface OrgData {
  org_id:             string;
  main_domain:        string;
  unique_name:        string;
  display_name:       string;
  parent_org:         null;
  organization_state: string;
  organization_type:  string;
  onboarding_type:    string;
  created_time:       Date;
  last_updated:       Date;
  _id:                string;
  profile:            Profile;
  information:        Information;
  children:           any[];
  domains:            any[];
  onboarding_data:    OnboardingData;
  lifecycle_events:   any[];
}

export interface Information {
  name:      string;
  sector:    null;
  employees: null;
  revenues:  null;
}

export interface OnboardingData {
  activeStep: number;
  complete:   boolean;
  consented:  boolean;
  form:       any[];
}

export interface Profile {
  company_logo:  string;
  contact_name:  string;
  contact_email: string;
  industry:      string;
}