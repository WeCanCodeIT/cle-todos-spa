using Microsoft.EntityFrameworkCore.Migrations;

namespace todos.Migrations
{
    public partial class AddOwnerModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Owner",
                table: "Todos");

            migrationBuilder.AddColumn<int>(
                name: "OwnerId",
                table: "Todos",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Owner",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Owner", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Owner",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "Mr. Handyman" });

            migrationBuilder.InsertData(
                table: "Owner",
                columns: new[] { "Id", "Name" },
                values: new object[] { 2, "Jen" });

            migrationBuilder.InsertData(
                table: "Owner",
                columns: new[] { "Id", "Name" },
                values: new object[] { 3, "Sarah" });

            migrationBuilder.UpdateData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 1,
                column: "OwnerId",
                value: 1);

            migrationBuilder.UpdateData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 2,
                column: "OwnerId",
                value: 2);

            migrationBuilder.UpdateData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 3,
                column: "OwnerId",
                value: 3);

            migrationBuilder.CreateIndex(
                name: "IX_Todos_OwnerId",
                table: "Todos",
                column: "OwnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Todos_Owner_OwnerId",
                table: "Todos",
                column: "OwnerId",
                principalTable: "Owner",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Todos_Owner_OwnerId",
                table: "Todos");

            migrationBuilder.DropTable(
                name: "Owner");

            migrationBuilder.DropIndex(
                name: "IX_Todos_OwnerId",
                table: "Todos");

            migrationBuilder.DropColumn(
                name: "OwnerId",
                table: "Todos");

            migrationBuilder.AddColumn<string>(
                name: "Owner",
                table: "Todos",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 1,
                column: "Owner",
                value: "Mr. Handyman");

            migrationBuilder.UpdateData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 2,
                column: "Owner",
                value: "Jen");

            migrationBuilder.UpdateData(
                table: "Todos",
                keyColumn: "Id",
                keyValue: 3,
                column: "Owner",
                value: "Sarah");
        }
    }
}
