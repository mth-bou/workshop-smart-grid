import React from 'react';
import {Button, Card, CardContent, Container, Typography} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import './Home.css';
import footprint from './img/pied énergies vertes.png';
import globe from './img/terre verte.png';
import tete from './img/tete reflexion empreinte carbone.png';
import speedometer from './img/speedometer.png';
import diagramme from './img/diagramme camembert.png';

const Home = () => {
    return (
        <div className="home">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid xs={7}>
                        <h1>Un outil conçu pour les entreprises soucieuses de l'environnement</h1>
                        <p style={{ fontSize: 22 }}>Vous souhaitez connaitre l'impact environnemental de votre entreprise ?
                            Nous avons développé un outil qui permet de calculer votre empreinte carbone simplement et rapidement.
                            Cet outil se base sur le type d'équipements et leur nombre présents dans votre parc informatique.
                        </p>
                        <div className="buttons-list">
                            <Button href="#" variant="contained" size="large">En savoir plus</Button>
                            <Button href="consommation" variant="contained" color="success" size="large">Calculer son empreinte carbone</Button>
                        </div>
                    </Grid>
                    <Grid className="globe-img-container" xs={5}>
                        <img src={globe} alt="Empreinte carbone" width="90%" height="max-content" />
                    </Grid>
                </Grid>

                <Grid container className="block-2-container">
                    <h2>Les avantages d'un tel outil</h2>
                    <p style={{ fontSize: 18 }}>L'objectif de notre plateforme est d'accélérer la prise de conscience écologique pour réduire, ensemble, notre empreinte carbone dès maintenant.</p>
                </Grid>

                <Grid container className="block-3-container" marginTop="2rem" spacing={5}>
                    <Grid  xs>
                        <Card sx={{ bgcolor: '#dbdbdb'}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 20, fontWeight: 600, margin: '2rem auto' }} color="text.secondary" textAlign="center" gutterBottom>
                                    Calcul du coût matériel
                                </Typography>
                                <Typography sx={{ fontSize: 16 }} color="#848484 !important" variant="body1">
                                    Réalisez un devis instantané de l'équipement nécessaire à votre activité.
                                </Typography>
                                <img style={{ display: 'flex', margin: '1rem auto' }} src={speedometer} alt="prise conscience" width="300px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs>
                        <Card sx={{ bgcolor: '#dbdbdb' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 20, fontWeight: 600, margin: '2rem auto' }} color="text.secondary" textAlign="center" gutterBottom>
                                    Calcul de l'empreinte carbone
                                </Typography>
                                <Typography sx={{ fontSize: 16 }} color="#848484 !important" variant="body1">
                                    Evaluez l'empreinte environnementale de votre entreprise
                                </Typography>
                                <img style={{ display: 'flex', margin: '1rem auto' }} src={footprint} alt="prise conscience" width="170px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs>
                        <Card sx={{ bgcolor: '#dbdbdb' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 22, fontWeight: 600, margin: '2rem auto' }} color="text.secondary" textAlign="center" gutterBottom>
                                    Prise de conscience
                                </Typography>
                                <Typography sx={{ fontSize: 16 }} color="#848484 !important">
                                    Engagez-vous dès maintenant en faveur de l'environnement.
                                </Typography>
                                <img style={{ display: 'flex', margin: '1rem auto' }} src={tete} alt="prise conscience" width="250px" />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <div className="block-4-container">
                <Grid container spacing={0}>
                    <Grid xs={5}>
                        <img style={{ maxWidth: '100%', margin: '1rem' }} src={diagramme} alt="Diagramme camembert" />
                    </Grid>
                    <Grid xs={7} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <p style={{ fontSize: 40, color: '#FFFFFF' }}>Maîtrisez votre bilan carbone en entreprise</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Home;