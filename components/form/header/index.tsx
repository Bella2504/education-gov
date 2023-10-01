import { Box, Grid } from '@mui/material';
import Image from 'next/image'
import { HeaderContainer, HeaderDescription, HeaderInfo, HeaderText } from './styled';
import { translate } from 'utils/translate';
import Link from 'next/link';

export default function Header() {
    return (
      <HeaderContainer>
        <Grid container sx={{ p: 4 }} rowSpacing={4} columnSpacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <HeaderInfo>
                {translate("main-header")}
              </HeaderInfo>
              <HeaderDescription>
                {translate("main-description")}
              </HeaderDescription>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
          <Box
              height={'100%'}
              minWidth={'100%'}
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: "space-around" }}
              p={2}
              border="1px solid white !important"
            >
              <Image
                src="/box.svg"
                alt="persoanlity quiz"
                width={80}
                height={80}
                priority
              />
              <HeaderText>{translate('main-personalityQuiz-header')}</HeaderText>
              <HeaderDescription>{translate('main-personalityQuiz-description')}</HeaderDescription>
              <Link href="/test">
                {translate('main-details')}
                <Image
                  src="/arrow_forward.svg"
                  alt="persoanlity quiz"
                  width={12}
                  height={12}
                  priority
                />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              height={'100%'}
              minWidth={'100%'}
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: "space-around" }}
              p={2}
              border="1px solid white !important"
            >
              <Image
                src="/search.svg"
                alt="advanced search"
                width={80}
                height={80}
                priority
              />
              <HeaderText>{translate('main-advancedSearch-header')}</HeaderText>
              <HeaderDescription>{translate('main-advancedSearch-description')}</HeaderDescription>
              <Link href="/advancedSearch">
                {translate('main-details')}
                <Image
                  src="/arrow_forward.svg"
                  alt="persoanlity quiz"
                  width={12}
                  height={12}
                  priority
                  />
              </Link>
            </Box>
          </Grid>
        </Grid>
        </HeaderContainer>
    );
  }