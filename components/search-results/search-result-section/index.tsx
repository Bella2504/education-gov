import { Box, Grid } from '@mui/material';
import Image from 'next/image'
import { filterValues } from 'utils/filter';
import { useFormikContext } from 'formik';
import { translate } from 'utils/translate';
import { Header, Title, Info } from './styled';

const SelectedResultList = () => {
    const { values } = useFormikContext();
    const filteredValues = filterValues(values);
    console.log(filteredValues);
    return (
        <Grid container sx={{ p: 2 }} rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} >
                {
                    filteredValues.best.map((university) => {
                        return <Grid container sx={{ py: 1 }} width='100%'>
                            <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'row', justifyContent: "start", alignItems: "center" }}>
                                <Image
                                    src={`/picture.svg`}
                                    alt={'Symbol of university'}
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </Grid>
                            <Grid item xs={12} md={9} >
                                <Grid container sx={{ py: 1 }} >
                                    <Header>{translate(university.name)}</Header>
                                    <Grid container sx={{ py: 1 }}>
                                        <Grid item xs={12} md={4}
                                            sx={{ display: 'flex', flexDirection: 'column', justifyContent: "start", alignItems: "center" }}
                                            p={2}
                                        >
                                            <Title>{translate("advancedSearch-facultyDetails-status")}:</Title>
                                            <Info>{translate(university['advancedSearch-facultyDetails-status'])}</Info>
                                            <Title>{translate("adress")}:</Title>
                                            <Info>{translate(university.adress)}</Info>
                
                                        </Grid>
                                        <Grid item xs={12} md={4}
                                            sx={{ display: 'flex', flexDirection: 'column', justifyContent: "start", alignItems: "center" }}
                                            p={2}
                                        >
                                            <Title>{translate("advancedSearch-userData-facultyGroup")}:</Title>
                                            <Info>{university["advancedSearch-userData-facultyGroup"].map((f) => translate(f)).join(', ')}</Info>
                                        </Grid>
                                        <Grid item xs={12} md={4}
                                            sx={{ display: 'flex', flexDirection: 'column', justifyContent: "start", alignItems: "center" }}
                                            p={2}
                                        >
                                            <Title>{translate("advancedSearch-facultyDetails-status")}:</Title>
                                            <Info>{translate(university['advancedSearch-facultyDetails-status'])}</Info>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    })
                }
           </Grid>
        </Grid>
    );
  }

export default SelectedResultList;
