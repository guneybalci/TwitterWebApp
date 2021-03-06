﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TwitterWeb.API.Data;

namespace TwitterWeb.API.Migrations
{
    [DbContext(typeof(TwitterAPIContext))]
    [Migration("20200116140733_v2")]
    partial class v2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("TwitterWeb.API.Models.Tweet", b =>
                {
                    b.Property<int>("tweetId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("tweetContent")
                        .HasColumnType("nvarchar(280)");

                    b.Property<DateTime>("tweetDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("userIdFk")
                        .HasColumnType("int");

                    b.HasKey("tweetId");

                    b.HasIndex("userIdFk");

                    b.ToTable("Tweets");
                });

            modelBuilder.Entity("TwitterWeb.API.Models.User", b =>
                {
                    b.Property<int>("userId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("imageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("loginName")
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(8)");

                    b.Property<byte[]>("passwordHash")
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("passwordSalt")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("userName")
                        .HasColumnType("nvarchar(25)");

                    b.Property<string>("userSurname")
                        .HasColumnType("nvarchar(25)");

                    b.HasKey("userId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("TwitterWeb.API.Models.Tweet", b =>
                {
                    b.HasOne("TwitterWeb.API.Models.User", "User")
                        .WithMany("Tweets")
                        .HasForeignKey("userIdFk")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
