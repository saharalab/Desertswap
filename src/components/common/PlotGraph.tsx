import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Tooltip, Area, AreaChart, ResponsiveContainer } from "recharts";
import { ToolTipContext } from "@/components/exchange/Context";
import { useWindowSize } from "@/custom-hooks";
import { faker } from "@faker-js/faker";
import { number } from "zod";

const CustomToolTip = ({
  active,
  payload,
  label,
  setCoinPrice,
  coinPrice,
}: any) => {
  const { toolTip, setToolTip }: any = useContext<any>(ToolTipContext);

  useEffect(() => {
    // setToolTip({payload, label, active})
    // if ()
    if (coinPrice !== payload[0]?.payload?.BUSD) {
      payload[0]?.payload?.BUSD
        ? setCoinPrice(payload[0]?.payload?.BUSD)
        : coinPrice;
    }
  });

  return (
    <div className="max-w-max max-h-max p-2 text-xs bg-supernova/80 text-black rounded-lg ">
      <span>{payload[0]?.payload?.time}</span>
    </div>
  );
};

type AreaCurveType =
  | "basis"
  | "basisClosed"
  | "basisOpen"
  | "linear"
  | "linearClosed"
  | "natural"
  | "monotoneX"
  | "monotoneY"
  | "monotone"
  | "step"
  | "stepBefore"
  | "stepAfter"
  | "CurveFactory";

export function PlotGraph({
  viewChartBy,
  setViewChartBy,
  coinPrice,
  setCoinPrice,
  graphColor,
}: {
  viewChartBy: "monthly" | "weekly" | "hourly";
  setViewChartBy: Dispatch<SetStateAction<"monthly" | "weekly" | "hourly">>;
  coinPrice: number;
  setCoinPrice: Dispatch<SetStateAction<number>>;
  graphColor: string;
}) {
  const [xAxisDataKey, setXAxisDataKey] = useState<string[]>([
    "2:20 PM",
    "3:20 PM",
    "4:20 PM",
    "5:20 PM",
  ]);

  const { width: screenWidth }: { width: number } = useWindowSize();

  const AreaCurve: AreaCurveType = "monotone";

  const AreaColor: string = graphColor;

  // const AreaColor: string = screenWidth >= 600 ? "#373739" : "#fce51c";

  useEffect(() => {
    
  })

  useEffect(() => {
    if (viewChartBy === "hourly") {
      setXAxisDataKey(["2:20 PM", "3:20 PM", "4:20 PM", "5:20 PM"]);
    } else if (viewChartBy === "weekly") {
      setXAxisDataKey(["Aug 16", "Aug 18", "Aug 21", "Aug 23"]);
    } else if (viewChartBy === "monthly") {
      setXAxisDataKey(["Jul 24", "Aug 03", "Aug 13", "Aug 23"]);
    }
  }, [viewChartBy]);

  return (
    <div className="w-full h-full sm:h-72 [&_svg]:h-full [&_svg]:w-full ">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={800}
          height={300}
          id="Area-chart"
          data={data[viewChartBy]}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorBUSD" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={AreaColor} stopOpacity={0.8} />
              <stop offset="95%" stopColor={AreaColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            content={<CustomToolTip {...{ coinPrice, setCoinPrice }} />}
          />
          <Area
            connectNulls={true}
            type={AreaCurve}
            dataKey="BUSD"
            stroke={AreaColor}
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorBUSD)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="pr-6 max-h-2 text-2xs flex w-full justify-between [&_div]:max-w-max text-white md:text-black/900">
        {xAxisDataKey.map((dataKey: string, idx: number) => (
          <div key={idx}>{dataKey}</div>
        ))}
      </div>
    </div>
  );
}

function fakeDataGenerator() {
  function randomDate(start: any, end: any) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  function generateData(): { time: string; BUSD: string } {
    return {
      time: `${randomDate(
        new Date(2012, 0, 1),
        new Date()
      ).getHours()}:${randomDate(
        new Date(2012, 0, 1),
        new Date()
      ).getMinutes()} ${Math.random() >= 0.5 ? "AM" : "PM"} ${faker.date.month({
        abbr: true,
      })} ${randomDate(
        new Date(2012, 0, 1),
        new Date()
      ).getDay()} GMT${randomDate(
        new Date(2012, 0, 1),
        new Date()
      ).getTimezoneOffset()}`,
      BUSD: parseFloat(`${Math.random() * 100}`).toFixed(2),
    };
  }

  // Hourly Dump Data
  let hourly: { time: string; BUSD: string }[] = Array(20)
    .fill(1)
    .map((item: any, idx: number) => generateData());

  // Weekly Dump Data
  let weekly: { time: string; BUSD: string }[] = Array(20)
    .fill(1)
    .map((item: any, idx: number) => generateData());

  // Monthly Dump Data
  let monthly: { time: string; BUSD: string }[] = Array(20)
    .fill(1)
    .map((item: any, idx: number) => generateData());

  return { hourly, weekly, monthly };
}

const data: {
  hourly: { time: string; BUSD: string }[];
  weekly: { time: string; BUSD: string }[];
  monthly: { time: string; BUSD: string }[];
} = fakeDataGenerator();
