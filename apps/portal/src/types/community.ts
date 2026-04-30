export type CommunityType = 'club' | 'society';

export interface CommunityHighlight {
  year: number;
  title: string;
  description: string;
  kind?: 'award' | 'launch' | 'funding' | 'milestone';
}

export interface CommunityMemberTeam {
  name: string;
  members?: number;
  result: string;
  year?: number;
}

export interface CommunityData {
  id: string;
  name: string;
  nameEn: string;
  type: CommunityType;
  tagline: string;
  summary: string;
  positioning: string;
  founded?: number;
  memberCount?: number;
  cadence?: string;
  color: string;
  icon: string;
  tags: string[];
  highlights: CommunityHighlight[];
  teams?: CommunityMemberTeam[];
  externalUrl?: string;
  relatedCourseIds?: string[];
}

export const communityTypeLabel: Record<CommunityType, string> = {
  club: '학생 동아리',
  society: '창업 학회',
};
