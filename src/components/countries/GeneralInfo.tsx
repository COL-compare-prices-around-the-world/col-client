import React from 'react'
import { Box, Typography } from '@mui/material'
import InfoCard from '../InfoCard'
import InfoWrapper from '../InfoWrapper'
import { DataGrid } from '@mui/x-data-grid'

const styles = {
    root: {},
    infoBlocks: {
        display: 'flex',
        flexDirection: 'row',
        gap: '24px',
        flexWrap: 'wrap',
        mb: 3,
    },
    infoTables: {
        display: 'flex',
        gap: '24px',

        flexDirection: 'column',
    },
}

const CARDS = [
    { id: 1, title: 'Похода в ресторан', info: '1255р', subInfo: 'Это цена ниже чем в 55% странах' },
    { id: 2, title: 'Продуктовая корзина', info: '950р', subInfo: 'На 12% выше чем в Малазии' },
    { id: 3, title: 'Тратят на досуг', info: '455р', subInfo: 'На 35% ниже чем в Малазии' },
    { id: 4, title: 'Поездка на такси', info: '155р', subInfo: 'На 51% ниже чем в Малазии ' },
]

const columns = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'name', headerName: 'Название', flex: 1 },
    { field: 'price', headerName: 'Цена', flex: 1 },
]

export default function GeneralInfo({ categoryInfo }: any) {
    const { restaurants, market, transport } = categoryInfo
    return (
        <Box sx={styles.root}>
            <Box sx={styles.infoBlocks}>
                {CARDS.map((item) => (
                    <InfoCard
                        key={`${item.id}-${item.title}`}
                        title={item.title}
                        info={item.info}
                        subInfo={item.subInfo || ''}
                    />
                ))}
            </Box>
            <Box sx={styles.infoTables}>
                <InfoWrapper>
                    <Typography variant="h6">Магазины</Typography>
                    <DataGrid autoHeight rows={market} columns={columns} />
                </InfoWrapper>
                <InfoWrapper>
                    <Typography variant="h6">Рестораны</Typography>
                    <DataGrid autoHeight rows={restaurants} columns={columns} />
                </InfoWrapper>
                <InfoWrapper>
                    <Typography variant="h6">Транспорт</Typography>
                    <DataGrid autoHeight rows={transport} columns={columns} />
                </InfoWrapper>
            </Box>
        </Box>
    )
}