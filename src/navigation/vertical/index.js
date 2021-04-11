// ** Navigation sections imports
import apps from './apps'
import pages from './pages'
import forms from './forms'
import tables from './tables'
import others from './others'
import dashboards from './dashboards'
import uiElements from './ui-elements'
import chartsAndMaps from './charts-maps'
import haki from './management'

// ** Merge & Export
export default [...dashboards, ...haki, ...apps, ...pages, ...uiElements, ...forms, ...tables, ...chartsAndMaps, ...others]
