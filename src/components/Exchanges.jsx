import React from 'react';
import millify from 'millify'
import { Collapse, Row, Col, Typography, Avatar, Card } from 'antd'
import HTMLReactParser from 'html-react-parser'

import { useGetExchangesQuery } from '../services/cryptoCoinApi'

import { Loader } from './'

const { Text, Title } = Typography
const { Panel } = Collapse

const Exchanges = () => {
	const { data, isFetching, error } = useGetExchangesQuery()
	
	const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'
	if (isFetching) return <Loader />
	if (error) return (
		<div className='not-found-404'>
			<Card>
				<div className="not-found-404-content">
					<img src={demoImage} alt="404" />
					<Title>
						404 
					</Title>
					<Title level={1}>
						Page Not Found!!!
					</Title>
				</div>
					
			</Card>
		</div>
	)
	const exchangesList = data?.data?.exchanges
	
	return (
        <>
          <Row>
            <Col span={6}>Exchanges</Col>
            <Col span={6}>24h Trade Volume</Col>
            <Col span={6}>Markets</Col>
            <Col span={6}>Change</Col>
          </Row>
			{exchangesList.map(exchange => (
				<Row>
					<Col span={24}>
						<Collapse>
							<Panel
								key={exchange.uuid}
								showArrow={false}
								header={(
									<Row key={exchange.uuid} style={{ width: '100%' }}>
										<Col span={6}>
											<Text><strong>{exchange.rank}.</strong></Text>
											<Avatar className="exchange-image" src={exchange.iconUrl} />
											<Text><strong>{exchange.name}</strong></Text>
										</Col>
										<Col span={6}>${millify(exchange.volume)}</Col>
										<Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
										<Col span={6}>{millify(exchange.marketShare)}%</Col>
									</Row>
								)}
							>
								{HTMLReactParser(exchange.description || '')}
							</Panel>
						</Collapse>
					</Col>
				</Row>
			))}
        </>
    );
};

export default Exchanges;
