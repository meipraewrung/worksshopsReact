import WordCard from '../components/WordCard'
import { Button, Row, Col, Input, Select } from 'antd';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { Loading3QuartersOutlined } from '@ant-design/icons';

const StyledWrapper = styled.div`
  padding: 20px 10%;
  @media(max-width: 425px) {
    padding: 20px 10px;
  }
  .select-types {
    width: 100%;
  }
  .form-item {
    margin-bottom: 10px;
  }

  .input-search{
    margin-bottom: 30px;
  }
`;

function HomePage() {

  // const context = useContext(AppContext)
  // console.log('data from context : ' + context)
  const { vocabController } = useContext(AppContext)
  const { vocabs, deleteVocab } = vocabController;

  const [ search, setSearch] = useState('');

  // const handleDelete = (index) => {
  //   deleteVocab(index);
  // }

  const renderVocabs = () => {
    // if (vocabs === null)
    if (!vocabs) {
      //spin => spin={true}
      return <Loading3QuartersOutlined spin />
    } else if (vocabs.length <= 0) {
      return <p>No data</p>
    } else {
      return vocabs.filter((item) => {
        return item.word.indexOf(search) >= 0
      }).sort((a, b) => {
        return b.createdAt.valueOf() - a.createdAt.valueOf() //ใหม่ไปเก่า
      }).map((item, index) => {
        return(
          <Col key={index} xs={24} sm={12} md={8} lg={6} >
            {/* <WordCard  {...item} onDelete={() => { handleDelete(index) }} /> */}
            <WordCard  {...item} onDelete={() => { deleteVocab(item.word) }} />
          </Col>
        )
      })
    }
  }

  return (
    <StyledWrapper>
      <h1>My vocabularies</h1>
      <Input.Search className="input-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search" />
      <Row gutter={[16, 24]}>
        {renderVocabs()}
      </Row>
    </StyledWrapper>
  );


}

export default HomePage;