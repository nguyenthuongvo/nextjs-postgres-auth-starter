import { Card, Title, Tracker, Flex, Text, Color, AreaChart, Metric, Button } from "@tremor/react";

interface Tracker {
  color: Color;
  tooltip: string;
}

const chartdata3 = [
  {
    date: "Jan 23",
    "Khai thác Pi": 167,
  },
  {
    date: "Feb 23",
    "Khai thác Pi": 125,
  },
  {
    date: "Mar 23",
    "Khai thác Pi": 156,
  },
  {
    date: "Apr 23",
    "Khai thác Pi": 165,
  },
  {
    date: "May 23",
    "Khai thác Pi": 153,
  },
  {
    date: "Jun 23",
    "Khai thác Pi": 124,
  },
  {
    date: "Jul 23",
    "Khai thác Pi": 164,
  },
  {
    date: "Aug 23",
    "Khai thác Pi": 123,
  },
  {
    date: "Sep 23",
    "Khai thác Pi": 132,
  },
];

const data: Tracker[] = [
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "gray", tooltip: "Maintenance" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
];

export const HolderSharing = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2">
    <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
      <Text>Số Pi đã khai thác</Text>
      <Metric>23.79 Pi</Metric>
      <Button size="xs" color="green">Nhận Pi</Button>
    </Card>
    <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
      <Text>Số người cùng thuê</Text>
      <Metric>7</Metric>
    </Card>
    <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
      <Text>Ngày hết hạn</Text>
      <Metric>27/01/2024</Metric>
    </Card>
  </div>

);

export const StatusTracker = () => (
  <Card className="mt-2" >
    <Title>Trạng thái Node</Title>
    <Text>Pi Cloud Node #1</Text>
    <Flex justifyContent="end" className="mt-4">
      <Text>Uptime 99%</Text>
    </Flex>
    <Tracker data={data} className="mt-2" />
  </Card>
  );

export const PiMiningChart = () => (
  <Card className="mt-2">
    <Title>Biểu đồ khai thác Pi trong một tháng</Title>
    <AreaChart
      className="h-72 mt-4"
      data={chartdata3}
      index="date"
      categories={["Khai thác Pi"]}
      colors={["blue"]}
      yAxisWidth={30}
    />
  </Card>
);

const features = [
  { name: 'Cấu hình', description: 'X99 XZ DU99D4 DUAL Xeon 26863 V4' },
  { name: 'CPU', description: 'DUAL Xeon 26863 V4 X2 32 nhân 64 luồng' },
  { name: 'RAM', description: '64GB DDR4 2133' },
  { name: 'Ổ CỨNG ', description: 'NVME 500GB' }
]

export default function Node() {
  return (
    <div className="bg-white">
      <div className="flex justify-center items-center pt-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Cấu hình Cloud Node tiêu chuẩn
        </h1>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 sm:grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <HolderSharing />
          <StatusTracker/>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-1 sm:gap-6 lg:gap-8">
          <PiMiningChart/>
        </div>
      </div>
    </div>
  )
}
