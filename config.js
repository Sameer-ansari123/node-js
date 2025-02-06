const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/e-comm', {
    serverSelectionTimeoutMS: 5000, // 5-second timeout for server selection (this option is still valid)
});
