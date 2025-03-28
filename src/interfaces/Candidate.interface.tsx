export interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface Candidate {
    total_count: number;
    incomplete_results: boolean;
    items: User[];
}

export interface CandidateSummary {
    login: string;
    html_url: string;
    avatar_url: string;
}

export interface Candidate {

    avatar_url: string;
    html_url: string;
    login: string;
  
  }