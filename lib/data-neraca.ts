export interface KpiMetric {
    label: string;
    value: string;
    trend?: string;
    trendUp?: boolean; // true = green/good, false = red/bad
    description?: string;
}
export interface BarData {
    label: string;
    value: number; // percentage or raw value for scaling
    displayValue: string;
    color?: string;
}
export const zakatData = {
    title: "Zakat Watch",
    subtitle: "Realisasi vs Potensi Zakat Nasional",
    metrics: [
        { label: "Potensi Zakat", value: "IDR 327 T", trend: "Estimasi BAZNAS", trendUp: true } as KpiMetric,
        { label: "Realisasi Terkumpul", value: "IDR 33 T", trend: "10% dari Potensi", trendUp: false } as KpiMetric,
    ],
    chart: [
        { label: "Potensi", value: 100, displayValue: "Rp 327 Triliun", color: "bg-slate-200" } as BarData,
        { label: "Realisasi", value: 10, displayValue: "Rp 33 Triliun", color: "bg-emerald-600" } as BarData,
    ],
    narrative: "Jurang (Gap) antara potensi dan realisasi masih sangat lebar. Digitalisasi dan literasi menjadi kunci untuk membuka gembok 90% potensi yang belum tergarap."
};
export const financeData = {
    title: "Islamic Finance Monitor",
    subtitle: "Market Share Perbankan Syariah",
    metrics: [
        { label: "Market Share", value: "7.03%", trend: "Stagnan < 10%", trendUp: false } as KpiMetric,
        { label: "Aset Total", value: "IDR 868 T", trend: "▲ 9.2% YoY", trendUp: true } as KpiMetric,
    ]
};
export const indeksData = {
    title: "Indeks Umat",
    subtitle: "Kesejahteraan & Literasi",
    items: [
        { label: "Tingkat Kemiskinan Umat", value: 9.5, displayValue: "9.5% Penduduk", color: "bg-rose-500" } as BarData,
        { label: "Literasi Keuangan Syariah", value: 9.1, displayValue: "9.1% (Rendah)", color: "bg-amber-500" } as BarData,
        { label: "Literasi Keuangan Umum", value: 49.6, displayValue: "49.6% Nasional", color: "bg-slate-400" } as BarData,
    ],
    narrative: "Ironi besar: Populasi Muslim mayoritas, namun literasi keuangan syariahnya jauh tertinggal dibandingkan literasi keuangan konvensional."
};
export const latestAnalysis = [
    {
        id: "1",
        title: "Mengapa Share Bank Syariah Susah Tembus 10%?",
        date: "14 Jan 2026",
        category: "ANALISIS DATA",
        excerpt: "Bukan hanya soal 'kurang religius', data menunjukkan masalah struktural pada pricing dan aksesibilitas."
    },
    {
        id: "2",
        title: "Peta Kantong Kemiskinan di Basis Pesantren",
        date: "12 Jan 2026",
        category: "INDEKS UMAT",
        excerpt: "Korelasi antara wilayah basis tradisional dengan indeks pembangunan manusia (IPM) yang rendah."
    },
    {
        id: "3",
        title: "Sukuk Ritel: Instrumen Penyelamat APBN?",
        date: "10 Jan 2026",
        category: "FINANCE",
        excerpt: "Data kepemilikan Sukuk Negara didominasi oleh investor individu, membuktikan likuiditas umat yang tinggi."
    }
];
