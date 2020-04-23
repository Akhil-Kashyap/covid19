import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return 'LOADING...';
	}
	return (
		<div className={styles.containerCards}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={11} md={3} className={cx(styles.card, styles.infected)}>
					<CardContent>
						<Typography color="initial" gutterBottom>
							Infected
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="initial" gutterBottom>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">NUMBER OF ACTIVE CASES</Typography>
					</CardContent>
				</Grid>

				<Grid item component={Card} xs={11} md={3} className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography color="initial" gutterBottom>
							Recovered
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={recovered.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="initial" gutterBottom>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">NUMBER OF RECOVERED CASES</Typography>
					</CardContent>
				</Grid>

				<Grid item component={Card} xs={11} md={3} className={cx(styles.card, styles.deaths)}>
					<CardContent>
						<Typography color="initial" gutterBottom>
							Death
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={deaths.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="initial" gutterBottom>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">NUMBER OF DEATH CASES</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
