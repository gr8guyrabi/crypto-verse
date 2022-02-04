import React from 'react';
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptoCoinStatsQuery } from '../services/cryptoApi'

const { Title } = Typography

const Homepage = () => {
  const { data, isFetching, error } = useGetCryptoCoinStatsQuery()
  const globalCoinStats = data?.data?.stats

  if (isFetching) return 'Loading...'
  if (error) return 'error'
  
  return (
        <>
          <Title level={2} className="heading">Global Crypto Stats</Title>
          <Row>
            <Col span={12}>
              <Statistic title="Total Cryptocurrencies" value={millify(globalCoinStats.total)}/>
            </Col>
            <Col span={12}>
              <Statistic title="Total Exchange" value={millify(globalCoinStats.totalExchanges)}/>
            </Col>
            <Col span={12}>
              <Statistic title="Total Market Cap" value={millify(globalCoinStats.totalMarketCap)}/>
            </Col>
            <Col span={12}>
              <Statistic title="Total 24h Volume" value={millify(globalCoinStats.total24hVolume)}/>
            </Col>
            <Col span={12}>
              <Statistic title="Total Markets" value={millify(globalCoinStats.totalMarkets)}/>
            </Col>
          </Row>
          <div className="home-heading-container">
            <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
            <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
          </div>
        </>
    );
};

export default Homepage;
