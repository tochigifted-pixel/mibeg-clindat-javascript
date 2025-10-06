/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/server', (req, res) => {
	res.json({message: "Hello, from the Express server!"});
});

app.use(express.static('public'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);