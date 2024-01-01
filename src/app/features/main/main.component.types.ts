export interface SectionInfo {
  id: SectionIdEnum;
  offsetTop: number;
  height: number;
}

export enum SectionIdEnum {
  Profile = 'profile',
  History = 'history',
  Skills = 'skills',
  WorkExperience = 'work-experience',
  ProjectExperience = 'project-experience',
  SideProjects = 'side-projects'
}
