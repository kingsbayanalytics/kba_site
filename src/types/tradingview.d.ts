declare global {
  interface Window {
    TradingView: {
      widget: new (config: ChartingLibraryWidgetOptions) => IChartingLibraryWidget;
    };
  }
}

export interface ChartingLibraryWidgetOptions {
  container_id: string;
  width: string | number;
  height: string | number;
  symbol: string;
  interval: string;
  timezone?: string;
  theme?: 'light' | 'dark';
  style?: string;
  locale?: string;
  toolbar_bg?: string;
  enable_publishing?: boolean;
  withdateranges?: boolean;
  hide_side_toolbar?: boolean;
  allow_symbol_change?: boolean;
  save_image?: boolean;
  studies?: string[];
  disabled_features?: string[];
  enabled_features?: string[];
  username?: string;
  charts_storage_url?: string;
  charts_storage_api_version?: string;
  client_id?: string;
  onChartReady?: () => void;
  custom_css_url?: string;
  loading_screen?: { backgroundColor: string };
  studies_overrides?: Record<string, any>;
  overrides?: {
    [key: string]: string | number | boolean;
    'mainSeriesProperties.style'?: number;
    'paneProperties.background'?: string;
    'paneProperties.vertGridProperties.color'?: string;
    'paneProperties.horzGridProperties.color'?: string;
    'scalesProperties.backgroundColor'?: string;
    'scalesProperties.lineColor'?: string;
  };
}

export interface IChartingLibraryWidget {
  onChartReady: (callback: () => void) => void;
  chart: () => IChartWidgetApi;
  remove: () => void;
}

export interface IChartWidgetApi {
  setTimezone: (timezone: string) => void;
  executeActionById: (actionId: string) => void;
}

export {}; 