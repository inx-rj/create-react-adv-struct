export interface UserIdentity {
   id: string;
   beanType: string;
   operation: string;
   login: string;
   managedSys: string;
   managedSysId: string;
   lastLogin: number;
   lastLoginAsStr: string;
   active: boolean;
   provStatus: string;
   locked: boolean;
   userId: string;
   pwdExp: number;
   pwdExpAsStr: string;
   gracePeriod: number;
   gracePeriodAsStr: string;
   lastUpdate: number;
   lastUpdateAsStr: string;
   prevLogin: number;
   prevLoginAsStr: string;
   pwdChanged: number;
   pwdChangedAsStr: string;
   lastAuthAttempt: number;
   lastAuthAttemptAsStr: string;
   lastLoginIP: string;
   deletable: boolean;
   displayName: string;
}

export interface HelpdeskQuestion {
   field: string;
   answer: string;
}
export interface HelpdeskQuestionAnswers {
   userId: string;
   questions: HelpdeskQuestion[];
   postbackUrl: string;
}

export interface UserType {
   id: string;
   beanType: string;
   name: string;
   operation: string;
   public: boolean;
}

export interface UserSearchBean {
   beanType: string;
   email: string;
   employeeId: string;
   id: string;
   name: string;
   operation: string;
   principal: string;
   public: boolean;
   userStatus: string;
}

export interface UserByInternalId {
   accessRightEndDate: Date;
   accessRightEndDateStr: Date;
   accessRightIds: string[];
   accessRightStartDate: string;
   accessRightStartDateStr: string;
   accountStatus: string;
   accountTypeName: string;
   alternateContactId: string;
   alternativeEndDate: Date;
   alternativeStartDate: Date;
   applicationNames: string[];
   beanType: string;
   birthdate: Date;
   birthdateAsStr: string;
   certificationDelegateEndDate: Date;
   certificationDelegateId: string;
   certificationDelegateStartDate: Date;
   classification: string;
   costCenter: string;
   department: string;
   division: string;
   email: string;
   employeeId: string;
   employeeTypeId: string;
   employeeTypeName: string;
   firstName: string;
   gender: string;
   id: string;
   jobCodeId: string;
   lastName: string;
   location: string;
   locationCd: string;
   maidenName: string;
   mdTypeId: string;
   middleInit: string;
   name: string;
   nickname: string;
   organization: string;
   organizations: string[];
   partnerName: string;
   phone: string;
   prefix: string;
   prefixLastName: string;
   principal: string;
   relationship: string;
   sex: string;
   startDate: string;
   suffix: string;
   supervisorMdTypeName: string;
   supervisorsNameList: string[];
   title: string;
   userStatus: string;
   userTypeInd: string;
   visible: string;
}