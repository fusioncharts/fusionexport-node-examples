// Export in Bulk
const path = require("path");

// Require FusionExport
const { ExportManager, ExportConfig } = require("fusionexport-node-client");

// Instantiate ExportManager
const exportManager = new ExportManager();

// Instantiate ExportConfig and add the required configurations
const exportConfig = new ExportConfig();

exportConfig.set(
	"chartConfig",
	path.join(__dirname, "resources", "multiple.json")
);
exportConfig.set("outputFile", "export-<%= number(5) %>");

// provide the export config
exportManager
	.export(exportConfig, ".", true)
	.then(exportedFiles => {
		exportedFiles.forEach(file => console.log(file));
	})
	.catch(err => {
		console.log(err);
	});
