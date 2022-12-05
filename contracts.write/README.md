# install
npm install

# contract A
cd contractA
node deploy
node broadcastTxn.js

# contract B
cd contractB
node deploy
node broadcastTxn.js

# read
cd warp-configs
node read.js