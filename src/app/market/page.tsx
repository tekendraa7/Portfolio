
"use client";

import { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement, BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineController, PointElement, LineElement, Filler } from 'chart.js';
import { FaCalendar, FaChartLine, FaWater, FaUniversity, FaIndustry, FaHotel, FaExchangeAlt, FaRocket, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SectionTitle } from '@/components/ui/SectionTitle';

// Register Chart.js components
Chart.register(
  DoughnutController, ArcElement, BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
  LineController, PointElement, LineElement, Filler
);

const MarketPage = () => {
    const sectorChartRef = useRef<HTMLCanvasElement>(null);
    const monthlyChartRef = useRef<HTMLCanvasElement>(null);
    const investmentReturnsChartRef = useRef<HTMLCanvasElement>(null);
    const ipoPerformanceChartRef = useRef<HTMLCanvasElement>(null);
    const monteCarloChartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const charts: Chart[] = [];
        const createChart = (ref: React.RefObject<HTMLCanvasElement>, config: any) => {
            if (ref.current) {
                const chart = new Chart(ref.current, config);
                charts.push(chart);
                return chart;
            }
        };

        const foregroundColor = getComputedStyle(document.documentElement).getPropertyValue('--foreground-hsl');
        const mutedForegroundColor = getComputedStyle(document.documentElement).getPropertyValue('--muted-foreground-hsl');

        // Sector Distribution Chart
        createChart(sectorChartRef, {
            type: 'doughnut',
            data: {
                labels: ['Banking & Insurance', 'Hydropower', 'Investment', 'Manufacturing', 'Trading', 'Hotels', 'Others'],
                datasets: [{
                    data: [53.5, 15.0, 7.6, 5.8, 5.0, 2.6, 10.5],
                    backgroundColor: ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))', '#f97316', '#6b7280'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom', labels: { padding: 20, usePointStyle: true, color: `hsl(${foregroundColor})` } } }
            }
        });

        // Monthly Performance Chart
        createChart(monthlyChartRef, {
            type: 'bar',
            data: {
                labels: ['January', 'March', 'July', 'December'],
                datasets: [{ label: 'Finance Sector', data: [70.84, 45.2, 138.68, 35.1], backgroundColor: 'hsl(var(--chart-1))' }, { label: 'Hydropower Sector', data: [86.56, 53.68, 93.7, 42.3], backgroundColor: 'hsl(var(--chart-2))' }, { label: 'Manufacturing', data: [45.2, 38.9, 86.82, 84.8], backgroundColor: 'hsl(var(--chart-3))' }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { title: { display: true, text: 'Strongest Months by Sector (% Gain)', font: { size: 16 }, color: `hsl(${foregroundColor})` }, legend: { position: 'bottom', labels: { color: `hsl(${foregroundColor})` } } },
                scales: { y: { beginAtZero: true, title: { display: true, text: 'Cumulative Gain (%)', color: `hsl(${foregroundColor})` }, ticks: { color: `hsl(${mutedForegroundColor})` } }, x: { ticks: { color: `hsl(${mutedForegroundColor})` } } }
            }
        });
        
        // Investment Returns Chart
        createChart(investmentReturnsChartRef, {
            type: 'bar',
            data: {
                labels: ['1 Year', '3 Years', '5 Years', '10 Years'],
                datasets: [
                    { label: 'Blue-Chip Portfolio', data: [18.5, 52.3, 89.7, 156.2], backgroundColor: 'hsl(var(--chart-1))' },
                    { label: 'Hydropower Focus', data: [22.1, 48.9, 95.4, 142.8], backgroundColor: 'hsl(var(--chart-2))' },
                    { label: 'Diversified Index', data: [15.8, 45.2, 78.9, 134.5], backgroundColor: 'hsl(var(--chart-3))' }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Illustrative Long-term Investment Returns (%)', font: { size: 16 }, color: `hsl(${foregroundColor})` }, legend: { position: 'bottom', labels: { color: `hsl(${foregroundColor})` } } }, scales: { y: { beginAtZero: true, title: { display: true, text: 'Cumulative Return (%)', color: `hsl(${foregroundColor})` }, ticks: { color: `hsl(${mutedForegroundColor})` } }, x: { ticks: { color: `hsl(${mutedForegroundColor})` } } } }
        });

        // IPO Performance Chart
        createChart(ipoPerformanceChartRef, {
            type: 'line',
            data: {
                labels: ['Day 1', 'Day 7', 'Day 30', 'Day 90', 'Day 180', '1 Year'],
                datasets: [
                    { label: 'Strong IPO', data: [25, 45, 78, 92, 85, 105], borderColor: 'hsl(var(--chart-1))', backgroundColor: 'hsla(var(--chart-1), 0.1)', tension: 0.4, fill: true },
                    { label: 'Average IPO', data: [15, 22, 28, 35, 32, 38], borderColor: 'hsl(var(--chart-2))', backgroundColor: 'hsla(var(--chart-2), 0.1)', tension: 0.4, fill: true },
                    { label: 'Weak IPO', data: [8, -5, -12, -8, -15, -20], borderColor: 'hsl(var(--destructive))', backgroundColor: 'hsla(var(--destructive), 0.1)', tension: 0.4, fill: true }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Illustrative IPO Performance Patterns (%)', font: { size: 16 }, color: `hsl(${foregroundColor})` }, legend: { position: 'bottom', labels: { color: `hsl(${foregroundColor})` } } }, scales: { y: { beginAtZero: false, title: { display: true, text: 'Return (%)', color: `hsl(${foregroundColor})` }, ticks: { color: `hsl(${mutedForegroundColor})` } }, x: { ticks: { color: `hsl(${mutedForegroundColor})` } } } }
        });

        // Monte Carlo Simulation Chart
        createChart(monteCarloChartRef, {
            type: 'line',
            data: {
                labels: ['0', '6m', '1y', '2y', '3y', '5y'],
                datasets: [
                    { label: 'Conservative', data: [100, 106, 112, 126, 141, 179], borderColor: 'hsl(var(--chart-3))', tension: 0.4 },
                    { label: 'Balanced', data: [100, 108, 116, 136, 158, 215], borderColor: 'hsl(var(--chart-1))', tension: 0.4 },
                    { label: 'Aggressive', data: [100, 110, 121, 146, 177, 259], borderColor: 'hsl(var(--destructive))', tension: 0.4 }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Portfolio Simulation (Indexed to 100)', font: { size: 16 }, color: `hsl(${foregroundColor})` }, legend: { position: 'bottom', labels: { color: `hsl(${foregroundColor})` } } }, scales: { y: { beginAtZero: false, title: { display: true, text: 'Value (Indexed)', color: `hsl(${foregroundColor})` }, ticks: { color: `hsl(${mutedForegroundColor})` } }, x: { ticks: { color: `hsl(${mutedForegroundColor})` } } } }
        });

        return () => charts.forEach(chart => chart.destroy());
    }, []);

    return (
        <div className="bg-background text-foreground min-h-screen">
            {/* Hero */}
            <section className="bg-background/80 py-16">
                <div className="container mx-auto px-8 text-center">
                    <h1 className="text-5xl font-bold text-foreground leading-tight text-glow">NEPSE Market Analysis</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-4">A data-driven roadmap for investors and traders in Nepal's dynamic capital market.</p>
                </div>
            </section>

            {/* Main content sections */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
                
                <section id="market-size">
                    <SectionTitle>Market Size & Structure</SectionTitle>
                    <div className="grid lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-3">
                           <Card className="h-full">
                                <CardHeader>
                                    <CardTitle>Market Capitalization</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">As of late 2025, the NEPSE total market capitalization reached approximately <strong>Rs. 4.48 trillion</strong>, a 31% increase from mid-2024.</p>
                                    <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
                                        <div className="flex justify-between"><span className="text-muted-foreground">NEPSE Index</span><span className="font-semibold text-green-500">2,665.60</span></div>
                                        <div className="flex justify-between"><span className="text-muted-foreground">Daily Turnover</span><span className="font-semibold">Rs. 6.63B</span></div>
                                        <div className="flex justify-between"><span className="text-muted-foreground">Float Market Cap</span><span className="font-semibold">Rs. 1.515T</span></div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                         <div className="lg:col-span-2">
                            <Card className="h-full">
                                <CardHeader><CardTitle>Sector Distribution</CardTitle></CardHeader>
                                <CardContent className="h-64"><canvas ref={sectorChartRef}></canvas></CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                
                <section id="seasonality">
                    <SectionTitle>Seasonality & Market Patterns</SectionTitle>
                     <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader><CardTitle>Festival-Driven Cycles</CardTitle></CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">The market shows predictable patterns around major festivals like <strong>Dashain</strong> and <strong>Tihar</strong>, often experiencing a pre-festival liquidity drain followed by a post-festival rebound.</p>
                                <Image src="https://picsum.photos/seed/festival/600/400" alt="Dashain and Tihar festival celebrations" width={600} height={400} className="rounded-lg shadow-sm w-full h-auto" data-ai-hint="nepali festival" />
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader><CardTitle>Strongest Trading Months</CardTitle></CardHeader>
                            <CardContent className="h-80"><canvas ref={monthlyChartRef}></canvas></CardContent>
                        </Card>
                    </div>
                </section>

                <section id="investing">
                     <SectionTitle>Long-term Investment Analysis</SectionTitle>
                      <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                             <CardHeader><CardTitle>Illustrative Investment Returns</CardTitle></CardHeader>
                             <CardContent className="h-80"><canvas ref={investmentReturnsChartRef}></canvas></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>IPO Performance Patterns</CardTitle></CardHeader>
                            <CardContent className="h-80"><canvas ref={ipoPerformanceChartRef}></canvas></CardContent>
                        </Card>
                    </div>
                </section>

                <section id="risk-metrics">
                     <SectionTitle>Risk & Portfolio Simulation</SectionTitle>
                     <div className="grid md:grid-cols-5 gap-8">
                        <div className="md:col-span-3">
                            <Card>
                                <CardHeader><CardTitle>Portfolio Value Simulation</CardTitle></CardHeader>
                                <CardContent className="h-80"><canvas ref={monteCarloChartRef}></canvas></CardContent>
                            </Card>
                        </div>
                        <div className="md:col-span-2 space-y-4">
                            <Card>
                                <CardHeader><CardTitle className="text-base">Conservative</CardTitle></CardHeader>
                                <CardContent>
                                    <div className="flex justify-between text-sm"><span>Large Cap Financials:</span> <span className="font-semibold">50%</span></div>
                                    <div className="flex justify-between text-sm"><span>Bonds:</span> <span className="font-semibold">25%</span></div>
                                    <div className="flex justify-between text-sm"><span>Blue-Chip Hydro:</span> <span className="font-semibold">15%</span></div>
                                    <div className="flex justify-between text-sm"><span>Volatility:</span><span className="font-semibold text-green-500">~12-15%</span></div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle className="text-base">Aggressive</CardTitle></CardHeader>
                                <CardContent>
                                    <div className="flex justify-between text-sm"><span>High-Growth Small Cap:</span> <span className="font-semibold">40%</span></div>
                                    <div className="flex justify-between text-sm"><span>Mid Cap Trading:</span> <span className="font-semibold">30%</span></div>
                                    <div className="flex justify-between text-sm"><span>IPO/Sector Rotation:</span> <span className="font-semibold">30%</span></div>
                                     <div className="flex justify-between text-sm"><span>Volatility:</span><span className="font-semibold text-red-500">~25-30%</span></div>
                                </CardContent>
                            </Card>
                        </div>
                     </div>
                </section>

                <section id="sector-analysis">
                    <SectionTitle>Sector Analysis — Trading vs Investing</SectionTitle>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader className="flex-row items-center gap-4 space-y-0">
                                <FaWater className="text-primary text-2xl" />
                                <CardTitle>Hydropower</CardTitle>
                            </CardHeader>
                             <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">Dominant trading sector with high volatility and liquidity.</p>
                                <div className="text-sm space-y-2">
                                    <div className="flex justify-between"><span>Turnover:</span><span className="font-semibold text-green-500">37.1%</span></div>
                                    <div className="flex justify-between"><span>Strategy:</span><span className="font-semibold text-primary">Trading</span></div>
                                </div>
                             </CardContent>
                        </Card>
                        <Card>
                             <CardHeader className="flex-row items-center gap-4 space-y-0">
                                <FaUniversity className="text-primary text-2xl" />
                                <CardTitle>Banking & Insurance</CardTitle>
                            </CardHeader>
                             <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">Market backbone with stable earnings and consistent dividends.</p>
                                <div className="text-sm space-y-2">
                                    <div className="flex justify-between"><span>Market Cap:</span><span className="font-semibold text-green-500">53.5%</span></div>
                                    <div className="flex justify-between"><span>Strategy:</span><span className="font-semibold text-green-500">Investment</span></div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex-row items-center gap-4 space-y-0">
                                <FaIndustry className="text-primary text-2xl" />
                                <CardTitle>Manufacturing</CardTitle>
                            </CardHeader>
                             <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">Diversified industrial companies with growth potential.</p>
                                 <div className="text-sm space-y-2">
                                    <div className="flex justify-between"><span>Volatility:</span><span className="font-semibold text-yellow-500">Medium</span></div>
                                    <div className="flex justify-between"><span>Strategy:</span><span className="font-semibold text-green-500">Investment</span></div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MarketPage;
