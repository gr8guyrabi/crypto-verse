import React from 'react';
import millify from 'millify'
import { Collapse, Row, Col, Typography, Avatar } from 'antd'
import HTMLReactParser from 'html-react-parser'

import { useGetExchangesQuery } from '../services/cryptoCoinApi'

import { Loader } from './'

const { Text } = Typography
const { Panel } = Collapse

const Exchanges = () => {
	// const { data, isFetching } = useGetExchangesQuery()
	// const exchangesList = data?.data?.exchanges

	const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

	const exchangesList = [
		{
			uuid: '123jk23',
			name: 'Bitcoin',
			rank: '1',
			iconUrl: demoImage,
			volume: 234234,
			numberOfMarkets: 123213,
			marketShare: 12234,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis non praesentium dolores recusandae facilis, officiis similique dolorum, voluptates beatae nam placeat soluta illo excepturi dolor tempore. Sit alias nulla est?'
		},
		{
			uuid: '23423',
			name: 'Bitcoin',
			rank: '1',
			iconUrl: demoImage,
			volume: 234234,
			numberOfMarkets: 123213,
			marketShare: 12234,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis non praesentium dolores recusandae facilis, officiis similique dolorum, voluptates beatae nam placeat soluta illo excepturi dolor tempore. Sit alias nulla est?'
		},
		{
			uuid: '456456',
			name: 'Bitcoin',
			rank: '1',
			iconUrl: demoImage,
			volume: 234234,
			numberOfMarkets: 123213,
			marketShare: 12234,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis non praesentium dolores recusandae facilis, officiis similique dolorum, voluptates beatae nam placeat soluta illo excepturi dolor tempore. Sit alias nulla est?'
		},
	]
	// if (isFetching) return <Loader />
	
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
