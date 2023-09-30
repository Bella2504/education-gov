import { useIntl } from "react-intl";

export const translate = (n: any) => {
    const intl = useIntl();

    return intl.formatMessage({
        id: n
    })
};