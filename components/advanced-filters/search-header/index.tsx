import { Button, Grid } from "@mui/material";
import { HeaderContainer } from "./styled";
import { translate } from "utils/translate";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();

    return (
        <HeaderContainer>
            <h3>{translate('main-advancedSearch-description')}</h3>
            <Button variant="outlined" onClick={() => { router.push('/test')}}>
                {translate('advancedSearch-userData-linktest')}
            </Button>
        </HeaderContainer>
    )
}