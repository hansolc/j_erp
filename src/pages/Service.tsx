import React from "react";
import styled from "styled-components";
import data from '../dummy';

const Container = styled.main`
    width: 1440px;
    height: 100%;
    margin: 0 auto;
    padding: 30px 0;
`

const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
`

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
`

const Table = styled.table`
    width: 100%;
    text-align: center;
    >thead {
        >tr>th{
            border: 1px solid black;
            vertical-align: middle;
        }
    }
    >tbody{
        >tr>td{
            border: 1px solid black;
        }
    }
    th, td{
        padding: 5px;
    }
`


function Service(){
    return (
        <Container>
            <Title>거래처원장</Title>
            <Section>
                <Table>
                    <thead>
                        <tr>
                            <th rowSpan={2}>월/일</th>
                            <th rowSpan={2}>상품명</th>
                            <th rowSpan={2}>원산지(등급)</th>
                            <th rowSpan={2}>Box</th>
                            <th rowSpan={2}>Kg</th>
                            <th rowSpan={1} colSpan={4}>매입</th>
                            <th rowSpan={1} colSpan={4}>매출</th>
                            <th rowSpan={2}>지급앱</th>
                            <th rowSpan={2}>수금액</th>
                            <th rowSpan={2}>미수금액</th>
                            <th rowSpan={2}>비고</th>
                            <th rowSpan={2}>이력번호</th>
                            <th rowSpan={2}>B/L번호</th>
                        </tr>
                        <tr>
                            <th>단가</th>
                            <th>공급가액</th>
                            <th>부가세</th>
                            <th>매입합계액</th>
                            <th>단가</th>
                            <th>공급가액</th>
                            <th>부가세</th>
                            <th>매입합계액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((row) => {
                                return (
                                    <tr key={row.id}>
                                        <td>{row.date}</td>
                                        <td>{row.product}</td>
                                        <td>{row.origin}</td>
                                        <td>{row.box}</td>
                                        <td>{row.kg}</td>
                                        <td>{row.purchases.price}</td>
                                        <td>{row.purchases.supplyValue}</td>
                                        <td>{row.purchases.tax}</td>
                                        <td>{row.purchases.total}</td>
                                        <td>{row.sales.price}</td>
                                        <td>{row.sales.supplyValue}</td>
                                        <td>{row.sales.tax}</td>
                                        <td>{row.sales.total}</td>
                                        <td>{row.allowance}</td>
                                        <td>{row.collection}</td>
                                        <td>{row.uncollection}</td>
                                        <td>{row.note}</td>
                                        <td>{row.privateId}</td>
                                        <td>{row.bl}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Section>
        </Container>
    )
}

export default Service;