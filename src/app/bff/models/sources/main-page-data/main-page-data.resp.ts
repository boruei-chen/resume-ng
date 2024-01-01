import { NamesEnum as IconNamesEnum } from 'src/app/shared/components/icon/icon.component.types';

export interface MainPageDataResp {
  profile: Profile;
  history: History[];
  skills: Skills;
  workExperience: WorkExperience[];
  projectExperience: ProjectExperience[];
  sideProjects: SideProject[];
}

export interface Profile {
  avatar: {
    image: string;
  };
  name: string;
  enName: string;
  jobTitle: string;
  contactList: Array<{
    id: string;
    text: string;
  }>;
  links: Array<{
    id: string;
    icon: {
      name: IconNamesEnum;
    };
    url: string;
  }>;
}

export interface History {
  id: string;
  media: {
    image: string;
  };
  enName: string;
  year: string;
  yearUnitText: string;
  companyName: string;
  jobTitle: string;
  technologies: Array<{
    id: string;
    text: string;
  }>;
}

export interface Skills {
  frontEnd: {
    title: string;
    list: Array<{
      id: string;
      icon: {
        name: IconNamesEnum;
      };
      text: string;
    }>;
  };
  nodePackages: {
    title: string;
    list: Array<{
      id: string;
      text: string;
    }>;
  };
  others: {
    title: string;
    list: Array<{
      id: string;
      text: string;
    }>;
  };
}

export interface WorkExperience {
  id: string;
  company: {
    logo: string;
    name: string;
  };
  jobTitle: string;
  period: {
    startDate: string;
    endDate: string;
  };
  preferment: Array<{
    id: string;
    date: string;
    jobTitle: string;
  }>;
  conductContent: Array<{
    id: string;
    text: string;
  }>;
}

export interface ProjectExperience {
  id: string;
  media: {
    video: string;
  };
  name: string;
  type: string;
  technologies: Array<{
    id: string;
    icon: {
      name: IconNamesEnum;
    }
  }>;
  nodePackages: Array<{
    id: string;
    text: string;
  }>;
  conductContent: Array<{
    id: string;
    text: string;
  }>;
}

export interface SideProject {
  id: string;
  language: {
    icon: {
      name: IconNamesEnum;
    };
  };
  name: string;
  links: Array<{
    id: string;
    icon: {
      name: IconNamesEnum;
    };
    url: string;
  }>;
  description: string;
  conductContent: Array<{
    id: string;
    text: string;
  }>;
}
