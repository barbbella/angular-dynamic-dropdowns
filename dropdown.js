angular.module('Dropdown', [])
  .controller('DropdownCtrl', ['$scope', function($scope) {
    // mock data
    var data = {
      Installations: [
        {
            InstallationGuid: "0cb0de16-a4bf-4581-b500-7eb4659f1cbc",
            Address: "408 Sunnyside Avenue",
            City: "Delwood",
            State: "CA",
            Zip: 68121
        },
        {
            InstallationGuid: "cbfb70ec-fd19-4bb9-ada8-756bcf2cb89d",
            Address: "921 Montauk Avenue",
            City: "Advance",
            State: "CA",
            Zip: 97523
        },
        {
            InstallationGuid: "e3b3328d-d7fb-48e4-8ad8-63d68be8f2d8",
            Address: "754 Union Avenue",
            City: "Darlington",
            State: "CA",
            Zip: 61987
        }
    ],
    NestStructures: [
        {
            StructureName: "Home",
            Zip: 86746,
            StructureID: "37ed9630-9bce-4482-9932-bbc900691c28"
        },
        {
            StructureName: "Vacation",
            Zip: 34191,
            StructureID: "c4e24f37-47b4-4622-8973-3f03804e8fe4"
        }
    ],
    Mapped: false
    };

    // assign data to form object
    $scope.formData = {};
    $scope.formData.Installations = data.Installations;
    $scope.formData.Installations.forEach(function(e) {
      e.NestStructure = {StructureName: 'None', StructureID: null};
    });
    $scope.structures = [];
    data.NestStructures.forEach(function(e) {
       $scope.structures.push(e);
    });
    $scope.structures.push({StructureName: 'None', StructureID: null});

    //$scope.selectedStructures = [];

    $scope.submitAnswer = function() {
      $scope.submission = [];
      $scope.formData.Installations.forEach(function(e) {
        $scope.submission.push({
          InstallationGuid: e.InstallationGuid,
          StructureID: e.NestStructure.StructureID
        });
      });
      // TODO: Add Api post call
    }

}]);




