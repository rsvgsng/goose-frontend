{ 
    test: /\.css$/
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[sha1:hash:hex:4]'
        }
      }
    ]
  }
  