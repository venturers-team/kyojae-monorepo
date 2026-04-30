export interface PathwayStep {
  courseId: string;
  reason: string;
  estimatedMinutes: number;
}

export interface PathwayData {
  id: string;
  persona: string;
  icon: string;
  description: string;
  steps: PathwayStep[];
}
