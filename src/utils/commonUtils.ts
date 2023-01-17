import {BaseTreeGridRow} from "../constants/types/commonTypes";
import {TreeViewData} from "../constants/types/componentsTypes";

export const safeParseJSON = (stringToParse: string) => {
  try {
      const parsedObject = JSON.parse(stringToParse);
      return parsedObject;
  } catch (err) {
      return null;
  }
};

export const getAppName = () => window.location.href.split('/')[3];

export const translate = (translationKey: string) => window.localeManager?.[translationKey] || '';

export const stringFormat = (mainString, ...args: string[]) => {
  return mainString?.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
  });
};

/* This function is used to make iframe height fit browser window size
in case if current height is smaller than your react component needs for proper displaying.
TO DO: find more effective solution for this problem */
export const adjustFrameHeight = () => {
  const frameElement = window.parent.document.getElementById("contentFrame");
  if (frameElement) {
    const { top } = frameElement.getBoundingClientRect();
    frameElement.style.minHeight = window.parent.innerHeight - top - 5 + 'px';
  }
};

export const convertDateFormatToDateFns = (formatString: string) => {
   return formatString?.replace('DD', 'dd')?.replace('YYYY', 'yyyy');
}

export const removeDuplicatesFromObjectArray = <T extends Array<any>>(array: T, uniqueKey: string) => {
    return array.filter((arrayItem, index, self) => index === self.findIndex(item => item[uniqueKey] === arrayItem[uniqueKey]))
}

export const valuesToString = (xs: {value: any}[]) => xs?.length > 0 ? xs.map(value => value.value).toString() : "";

export const dateTimeFileNameGenerator = () => {
  const dateAndTime = new Date().toLocaleString()
  const [date, time] = dateAndTime.split(" ")
  const formatedDate = date.replaceAll("/", "_").slice(0, date.length -1)
  const formatedTime = time.replaceAll(":", "_")

  return {formatedDate, formatedTime}
}

export const ReportParams = [
  { label: "FIRST_NAME_HEADER", value: "FIRST_NAME_HEADER" },
  { label: "LAST_NAME_HEADER", value: "LAST_NAME_HEADER" },
  { label: "MIDDLE_INITIAL_HEADER", value: "MIDDLE_INITIAL_HEADER" },
  { label: "USER_STATUS_HEADER", value: "USER_STATUS_HEADER" },
  { label: "ACCOUNT_STATUS_HEADER", value: "ACCOUNT_STATUS_HEADER" },
  { label: "COMPANY_OWNER_ID_HEADER", value: "COMPANY_OWNER_ID_HEADER" },
  { label: "EMPLOYEE_ID_HEADER", value: "EMPLOYEE_ID_HEADER" },
  { label: "PHONE_HEADER", value: "PHONE_HEADER" },
  { label: "EMAIL_HEADER", value: "EMAIL_HEADER" },
  { label: "LOGIN_HEADER", value: "LOGIN_HEADER" },
  { label: "LAST_LOGIN_HEADER", value: "LAST_LOGIN_HEADER" },
  { label: "START_DATE_HEADER", value: "START_DATE_HEADER" },
  { label: "END_DATE_HEADER", value: "END_DATE_HEADER" },
  { label: "SUPERVISOR_NAME_HEADER", value: "SUPERVISOR_NAME_HEADER" },
  { label: "ATTRIBUTE_NAME_HEADER", value: "ATTRIBUTE_NAME_HEADER" },
  { label: "ATTRIBUTE_VALUE_HEADER", value: "ATTRIBUTE_VALUE_HEADER" },
]
