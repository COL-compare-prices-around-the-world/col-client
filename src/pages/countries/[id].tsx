import React, { ReactElement, useEffect, useState } from 'react'
import Image from 'next/image'
import { Box, Typography, Tabs, Tab } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { contries } from '@/mock'
import PageLayout from '@/layouts/PageLayout'
import InfoWrapper from '@/components/InfoWrapper'
import InfoCard from '@/components/InfoCard'
import { TabPanel, allyProps } from '@/components/tabs'
import flagImg from '@/assets/united-kingdom.png'
import GeneralInfo from './GeneralInfo'

type IContry = any

const TABS = [
    { label: 'Общие' },
    { label: 'Магазины' },
    { label: 'Жилье' },
    { label: 'Рестараны' },
    { label: 'Транспорт' },
]

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        // p: 2,
    },
    country: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
    },
}

export default function Country({ country }: IContry) {
    const [tab, setTab] = useState<number>(0)

    const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
        setTab(newTab)
    }

    return (
        <Box sx={styles.root}>
            <InfoWrapper style={{ paddingBottom: 0 }}>
                <Box sx={styles.country}>
                    <Image alt="country flag img" src={flagImg.src} width={24} height={24} />
                    <Typography variant="h6">{country?.name || ''}</Typography>
                </Box>
                <Tabs value={tab} onChange={handleTabChange}>
                    {TABS.map((item, index) => (
                        <Tab key={index + item.label} label={item.label} {...allyProps(index)} />
                    ))}
                </Tabs>
            </InfoWrapper>
            <TabPanel value={tab} index={0} style={{ padding: 0 }}>
                <GeneralInfo countryName={country.name} categoryInfo={country.info.statistic} />
            </TabPanel>

            <TabPanel value={tab} index={1}>
                <>В разработке....</>
            </TabPanel>
        </Box>
    )
}
const getContries = async () => ({
    data: contries,
    message: 'its ok',
    error: null,
})

const getCountry = async (id: number) => ({
    data: contries.filter((country) => country.id === id)[0],
    message: 'its ok',
    error: null,
})

Country.getLayout = function getLayout(page: ReactElement) {
    return <PageLayout>{page}</PageLayout>
}

export async function getStaticProps({ params }: any) {
    const response = await getCountry(+params.id)
    const country = response.data
    return {
        props: {
            country,
        },
    }
}

export async function getStaticPaths() {
    const contries = await getContries()

    const paths = contries.data.map((post) => ({
        params: { id: post.id.toString() },
    }))

    return {
        paths,
        fallback: false,
    }
}
