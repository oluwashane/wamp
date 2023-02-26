export const WidgetOne = () => {
  return (
    <div className="z-0">
      <div
        style={{
          height: '62px',
          backgroundColor: '#1D2330',
          overflow: 'hidden',
          boxSizing: 'border-box',
          border: '1px solid #fff',
          borderRadius: '1px',
          textAlign: 'right',
          lineHeight: '14px',
          blockSize: '42px',
          fontSize: '12px',
          fontFeatureSettings: 'normal',
          textSizeAdjust: '100%',
          boxShadow: 'inset 0 -20px 0 0 #fff',
          padding: '0',
          margin: '0',
          width: '100%',
        }}
      >
        <div
          style={{
            height: '40px',
            padding: '0px',
            margin: '0px',
            width: '100%',
          }}
        >
          <iframe
            src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=no"
            width="100%"
            height="36px"
            style={{
              border: '0',
              margin: '0',
              padding: '0',
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export const WidgetTwo = () => {
  return (
    <div className="relative">
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
        <script
          type="text/javascript"
          src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
          async
        >
          {`{
            
            "defaultColumn": "overview",
            "screener_type": "crypto_mkt",
            "displayCurrency": "USD",
            "colorTheme": "light",
            "locale": "en",
            "isTransparent": true
        }`}
        </script>
      </div>
    </div>
  );
};
