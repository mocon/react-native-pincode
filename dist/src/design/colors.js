"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = {
    red: '#ff4a3d',
    alert: '#ff4a3d',
    green: '#19bd9b',
    valid: '#19bd9b',
    orange: '#ffa500',
    dark: '#1a1a1a',
    light: '#fafafa',
    background: '#ffffff',
    white: '#ffffff',
    base: '#445878',
    primary: '#799AE0',
    pink: '#FF87C3',
    grey: '#646464',
    turquoise: '#7BCDD0',
    darkBlue: '#1B4581',
    cash: '#FF87C3',
    nzSecurities: '#799AE0',
    property: '#92CDCF',
    nzEquities: '#19bd9b',
    ausEquities: '#DECD58',
    globalEquities: '#FFAA4A',
    altStrategies: '#ff4a3d',
    globalDebtSecurities: '#1a1a1a'
};
exports.colors = colors;
const documentColor = (docType) => {
    switch (docType) {
        case 'CUSTODY_REPORT':
            return colors.pink;
        case 'TAX_REPORT':
        default:
            return colors.primary;
    }
};
exports.documentColor = documentColor;
