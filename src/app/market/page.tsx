
"use client";

import { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement, BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineController, PointElement, LineElement, Filler } from 'chart.js';
import { FaCalendar, FaChartLine, FaWater, FaUniversity, FaIndustry, FaHotel, FaExchangeAlt, FaRocket, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';

// Register Chart.js components
Chart.register(
  DoughnutController, ArcElement, BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
  LineController, PointElement, LineElement, Filler
);

const SectionDivider = () => <div className="h-[2px] bg-gradient-to-r from-primary to-transparent my-12" />;

const MarketPage = () => {
    const sectorChartRef = useRef<HTMLCanvasElement>(null);
    const monthlyChartRef = useRef<HTMLCanvasElement>(null);
    const investmentReturnsChartRef = useRef<HTMLCanvasElement>(null);
    const ipoPerformanceChartRef = useRef<HTMLCanvasElement>(null);
    const monteCarloChartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // Cleanup function to destroy charts
        const charts: Chart[] = [];
        const createChart = (ref: React.RefObject<HTMLCanvasElement>, config: any) => {
            if (ref.current) {
                const chart = new Chart(ref.current, config);
                charts.push(chart);
                return chart;
            }
        };

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
                plugins: { legend: { position: 'bottom', labels: { padding: 20, usePointStyle: true, color: 'hsl(var(--foreground))' } } }
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
                plugins: { title: { display: true, text: 'Strongest Months by Sector (Cumulative % Gain)', font: { size: 16 }, color: 'hsl(var(--foreground))' }, legend: { position: 'bottom', labels: { color: 'hsl(var(--foreground))' } } },
                scales: { y: { beginAtZero: true, title: { display: true, text: 'Cumulative Gain (%)', color: 'hsl(var(--foreground))' }, ticks: { color: 'hsl(var(--muted-foreground))' } }, x: { ticks: { color: 'hsl(var(--muted-foreground))' } } }
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
            options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Illustrative Long-term Investment Returns (%)', font: { size: 16 }, color: 'hsl(var(--foreground))' }, legend: { position: 'bottom', labels: { color: 'hsl(var(--foreground))' } } }, scales: { y: { beginAtZero: true, title: { display: true, text: 'Cumulative Return (%)', color: 'hsl(var(--foreground))' }, ticks: { color: 'hsl(var(--muted-foreground))' } }, x: { ticks: { color: 'hsl(var(--muted-foreground))' } } } }
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
            options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Illustrative IPO Performance Patterns (%)', font: { size: 16 }, color: 'hsl(var(--foreground))' }, legend: { position: 'bottom', labels: { color: 'hsl(var(--foreground))' } } }, scales: { y: { beginAtZero: false, title: { display: true, text: 'Cumulative Return (%)', color: 'hsl(var(--foreground))' }, ticks: { color: 'hsl(var(--muted-foreground))' } }, x: { ticks: { color: 'hsl(var(--muted-foreground))' } } } }
        });

        // Monte Carlo Simulation Chart
        createChart(monteCarloChartRef, {
            type: 'line',
            data: {
                labels: ['0', '6 months', '1 year', '2 years', '3 years', '5 years'],
                datasets: [
                    { label: 'Conservative', data: [100000, 106000, 112360, 126247, 141861, 179342], borderColor: 'hsl(var(--chart-3))', tension: 0.4 },
                    { label: 'Balanced', data: [100000, 108000, 116640, 136048, 158696, 215892], borderColor: 'hsl(var(--chart-1))', tension: 0.4 },
                    { label: 'Aggressive', data: [100000, 110000, 121000, 146410, 177156, 259374], borderColor: 'hsl(var(--destructive))', tension: 0.4 }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Portfolio Value Simulation (Rs) - Monte Carlo Analysis', font: { size: 16 }, color: 'hsl(var(--foreground))' }, legend: { position: 'bottom', labels: { color: 'hsl(var(--foreground))' } } }, scales: { y: { beginAtZero: false, title: { display: true, text: 'Portfolio Value (Rs)', color: 'hsl(var(--foreground))' }, ticks: { color: 'hsl(var(--muted-foreground))' } }, x: { ticks: { color: 'hsl(var(--muted-foreground))' } } } }
        });

        return () => charts.forEach(chart => chart.destroy());
    }, []);

    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="lg:ml-72"> {/* Adjust for fixed sidebar if any */}
                {/* Hero */}
                <section className="bg-gradient-to-br from-card to-background py-16">
                    <div className="container mx-auto px-8">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <div className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium">Comprehensive Market Analysis</div>
                                <h1 className="text-5xl font-bold text-primary leading-tight"><span className="italic text-accent">Navigating</span> the NEPSE Market</h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">A data-driven roadmap for investors and traders in Nepal's dynamic capital market.</p>
                                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                                    <span><FaCalendar className="inline mr-2" />Market Cap: Rs. 4.4T+</span>
                                    <span><FaChartLine className="inline mr-2" />322 Listed Companies</span>
                                    <span><FaWater className="inline mr-2" />Hydropower: 37% Turnover</span>
                                </div>
                            </div>
                            <div className="relative h-80 w-full">
                                <Image src="https://picsum.photos/seed/nepse/600/400" alt="Nepal Stock Exchange trading floor" layout="fill" objectFit="cover" className="rounded-2xl shadow-2xl" data-ai-hint="stock exchange floor" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main content sections */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Market Size & Structure */}
                    <section id="market-size" className="py-12">
                        <h2 className="text-4xl font-bold text-primary mb-12">Market Size & Structure</h2>
                        <div className="grid lg:grid-cols-2 gap-12 mb-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-primary/90">Market Capitalization Overview</h3>
                                <p className="text-muted-foreground mb-6">As of November 26, 2025, the Nepal Stock Exchange has a total market capitalization of approximately <strong>Rs. 4.48 trillion</strong>. This represents a 31.05% increase from Rs. 3.553 trillion recorded in mid-July 2024.</p>
                                <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                                    <h4 className="font-semibold text-card-foreground mb-4">Key Metrics (Nov 26, 2025)</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between"><span className="text-muted-foreground">NEPSE Index</span><span className="font-semibold text-green-400">2,665.60 (+0.36%)</span></div>
                                        <div className="flex justify-between"><span className="text-muted-foreground">Daily Turnover</span><span className="font-semibold">Rs. 6.63B</span></div>
                                        <div className="flex justify-between"><span className="text-muted-foreground">Float Market Cap</span><span className="font-semibold">Rs. 1.515T</span></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-primary/90">Sector Distribution</h3>
                                <p className="text-muted-foreground mb-6">The market is heavily concentrated in the Banking, Financial Institutions, and Insurance (BFI) sector, which accounts for over 53% of total market capitalization.</p>
                                <div className="bg-card p-6 rounded-xl shadow-sm border border-border h-80"><canvas ref={sectorChartRef}></canvas></div>
                            </div>
                        </div>
                    </section>
                    
                    <SectionDivider />

                    {/* Seasonality & Cycles */}
                    <section id="seasonality" className="py-12">
                        <h2 className="text-4xl font-bold text-primary mb-12">Seasonality & Cycles</h2>
                        <div className="grid lg:grid-cols-3 gap-8 mb-12">
                            <div className="lg:col-span-2">
                                <h3 className="text-2xl font-semibold mb-6 text-primary/90">Festival-Driven Market Patterns</h3>
                                <p className="text-muted-foreground mb-6">The NEPSE market exhibits predictable seasonality driven by Nepal's major festivals and fiscal calendar. Historical data shows consistent patterns around <strong>Dashain</strong>, <strong>Tihar</strong>, and the <strong>July fiscal year-end</strong>.</p>
                            </div>
                            <div className="relative h-64 w-full">
                                <Image src="https://picsum.photos/seed/festival/600/400" alt="Dashain and Tihar festival celebrations" layout="fill" objectFit="cover" className="rounded-xl shadow-sm" data-ai-hint="nepali festival" />
                            </div>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border h-96"><canvas ref={monthlyChartRef}></canvas></div>
                    </section>

                    <SectionDivider />

                    {/* Volatility & Trading */}
                    <section id="volatility" className="py-12">
                        <h2 className="text-4xl font-bold text-primary mb-12">Volatility & Best Trading Targets</h2>
                        <div className="grid lg:grid-cols-2 gap-12 mb-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-primary/90">Identifying High-Volatility Opportunities</h3>
                                <p className="text-muted-foreground mb-6">The NEPSE market offers significant trading opportunities through volatility analysis. The Hydropower sector leads in both volatility and liquidity, making it ideal for active trading strategies.</p>
                            </div>
                            <div className="relative h-64 w-full">
                                <Image src="https://picsum.photos/seed/trading/600/400" alt="Active stock trading workstation" layout="fill" objectFit="cover" className="rounded-xl shadow-sm" data-ai-hint="stock trading" />
                            </div>
                        </div>
                    </section>

                    <SectionDivider />
                    
                    {/* Long-term Investing */}
                    <section id="investing" className="py-12">
                         <h2 className="text-4xl font-bold text-primary mb-12">Best Companies for Long-term Investing</h2>
                         <div className="bg-card p-6 rounded-xl border border-border h-96"><canvas ref={investmentReturnsChartRef}></canvas></div>
                    </section>

                    <SectionDivider />
                    
                    {/* IPO Analysis */}
                    <section id="ipo-analysis" className="py-12">
                        <h2 className="text-4xl font-bold text-primary mb-12">IPO & Newly-Listed Shares Behaviour</h2>
                        <div className="bg-card p-6 rounded-xl border border-border h-96"><canvas ref={ipoPerformanceChartRef}></canvas></div>
                    </section>

                    <SectionDivider />

                    {/* Risk Metrics */}
                    <section id="risk-metrics" className="py-12">
                         <h2 className="text-4xl font-bold text-primary mb-12">Risk Metrics & Portfolio Construction</h2>
                         <div className="bg-card p-6 rounded-xl border border-border h-96"><canvas ref={monteCarloChartRef}></canvas></div>
                    </section>

                    <SectionDivider />

                    {/* Sector Analysis */}
                    <section id="sector-analysis" className="py-12">
                        <h2 className="text-4xl font-bold text-primary mb-12">Sector Analysis — Trading vs Investing</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                                <div className="flex items-center mb-4"><FaWater className="text-cyan-400 text-2xl mr-3" /><h3 className="text-xl font-semibold text-primary/90">Hydropower</h3></div>
                                <p className="text-sm text-muted-foreground mb-4">Dominant trading sector with high volatility and liquidity.</p>
                                <div className="text-sm space-y-2">
                                    <div className="flex justify-between"><span>Market Cap:</span><span className="font-semibold">15.0%</span></div>
                                    <div className="flex justify-between"><span>Turnover:</span><span className="font-semibold text-green-400">37.1%</span></div>
                                    <div className="flex justify-between"><span>Volatility:</span><span className="font-semibold text-red-400">High</span></div>
                                    <div className="flex justify-between"><span>Strategy:</span><span className="font-semibold text-cyan-400">Trading</span></div>
                                </div>
                            </div>
                             <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                                <div className="flex items-center mb-4"><FaUniversity className="text-blue-400 text-2xl mr-3" /><h3 className="text-xl font-semibold text-primary/90">Banking & Insurance</h3></div>
                                <p className="text-sm text-muted-foreground mb-4">Market backbone with stable earnings and consistent dividends.</p>
                                <div className="text-sm space-y-2">
                                    <div className="flex justify-between"><span>Market Cap:</span><span className="font-semibold text-green-400">53.5%</span></div>
                                    <div className="flex justify-between"><span>Turnover:</span><span className="font-semibold">14.3%</span></div>
                                    <div className="flex justify-between"><span>Volatility:</span><span className="font-semibold text-green-400">Low</span></div>
                                    <div className="flex justify-between"><span>Strategy:</span><span className="font-semibold text-green-400">Investment</span></div>
                                </div>
                            </div>
                             <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                                <div className="flex items-center mb-4"><FaIndustry className="text-green-400 text-2xl mr-3" /><h3 className="text-xl font-semibold text-primary/90">Manufacturing</h3></div>
                                <p className="text-sm text-muted-foreground mb-4">Diversified industrial companies with growth potential.</p>
                                <div className="text-sm space-y-2">
                                    <div className="flex justify-between"><span>Market Cap:</span><span className="font-semibold">5.8%</span></div>
                                    <div className="flex justify-between"><span>Turnover:</span><span className="font-semibold">9.1%</span></div>
                                    <div className="flex justify-between"><span>Volatility:</span><span className="font-semibold text-yellow-400">Medium</span></div>
                                    <div className="flex justify-between"><span>Strategy:</span><span className="font-semibold text-green-400">Investment</span></div>
                                </div>
                            </div>
                        </div>
                    </section>

                     <SectionDivider />

                    {/* Diversification Framework */}
                    <section id="diversification" className="py-12">
                        <h2 className="text-4xl font-bold text-primary mb-12">Recommended Diversification Framework</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-card p-6 rounded-lg border border-border">
                                <h4 className="font-semibold text-green-400 mb-4 flex items-center"><FaShieldAlt className="mr-2" /> Conservative</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between"><span>Large Cap Banking/Insurance:</span> <span className="font-semibold">50%</span></div>
                                    <div className="flex justify-between"><span>Government Bonds:</span> <span className="font-semibold">25%</span></div>
                                    <div className="flex justify-between"><span>Blue-Chip Hydropower:</span> <span className="font-semibold">15%</span></div>
                                    <div className="flex justify-between"><span>Cash/Equivalents:</span> <span className="font-semibold">10%</span></div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-border/50"><div className="flex justify-between text-sm"><span>Expected Volatility:</span> <span className="font-semibold text-green-400">12-15%</span></div></div>
                            </div>
                             <div className="bg-card p-6 rounded-lg border border-border">
                                <h4 className="font-semibold text-blue-400 mb-4 flex items-center"><FaBalanceScale className="mr-2" /> Balanced</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between"><span>Large Cap Financials:</span> <span className="font-semibold">35%</span></div>
                                    <div className="flex justify-between"><span>Mid Cap Diversified:</span> <span className="font-semibold">25%</span></div>
                                    <div className="flex justify-between"><span>Hydropower Growth:</span> <span className="font-semibold">20%</span></div>
                                    <div className="flex justify-between"><span>Trading Opportunities:</span> <span className="font-semibold">20%</span></div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-border/50"><div className="flex justify-between text-sm"><span>Expected Volatility:</span> <span className="font-semibold text-blue-400">18-22%</span></div></div>
                            </div>
                             <div className="bg-card p-6 rounded-lg border border-border">
                                <h4 className="font-semibold text-red-400 mb-4 flex items-center"><FaRocket className="mr-2" /> Aggressive</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between"><span>High-Growth Small Cap:</span> <span className="font-semibold">40%</span></div>
                                    <div className="flex justify-between"><span>Mid Cap Trading:</span> <span className="font-semibold">30%</span></div>
                                    <div className="flex justify-between"><span>Sector Rotation:</span> <span className="font-semibold">20%</span></div>
                                    <div className="flex justify-between"><span>IPO Opportunities:</span> <span className="font-semibold">10%</span></div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-border/50"><div className="flex justify-between text-sm"><span>Expected Volatility:</span> <span className="font-semibold text-red-400">25-30%</span></div></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MarketPage;
