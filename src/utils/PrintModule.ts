import { NativeModules } from 'react-native';

interface PrintModuleType {
  // html: when set, prints that HTML content directly (via a hidden WebView) instead of
  // whatever page is currently shown in the kiosk's main WebView. Used for the
  // window.open()-based print-popup pattern, where the printable content never belongs
  // to the visible page at all.
  printWebView(title: string | null, paperSize: string | null, html?: string | null): Promise<boolean>;
  isPrintAvailable(): Promise<boolean>;
  getPrintSpoolerPackages(): Promise<string[]>;
}

const PrintModule: PrintModuleType = NativeModules.PrintModule;

export default PrintModule;
