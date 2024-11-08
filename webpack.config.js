module.exports = {
  // Change le point d'entrée en index.tsx
  entry: "./src/index.js",
  // Active le sourcemap pour le debugging
  devtool: "source-map",
    resolve: {
        // Ajoute '.ts' et'.tsx' aux extensions traitées
        extensions: [".ts", ".tsx", ".js",'.jsx', ".json"],
        fallback: {
            zlib: false,
            async_hooks: false,
            path: false,
            tls: false,
            net: false,
            os: false,
            crypto: false,
            buffer: false,
            fs: false,
            stream: false,
            url: false,
            util: false,
            dns: false,
            child_process: false,
            http: false,
            https: false,
            querystring: false,
        }
    },
//   output: {
//     path: path.join(__dirname, "/dist"),
//     filename: "index_bundle.js"
//   },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  { loader: 'style-loader' },
                  {
                      loader: 'css-loader',
                      options: {
                          modules: true,
                      },
                  },
                  { loader: 'sass-loader' },
              ],
          },
      ],
  }
}