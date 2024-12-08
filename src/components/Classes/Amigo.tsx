import React from "react";

export class Amigo {
    private nome: string;
    private userName: string;
    private online: boolean;
    private avatar: string;
    private avatarIcone: string[];

    constructor(
        nome: string,
        userName: string,
        online: boolean,
        avatar: string,
        avatarIcone: string[] = []
    ) {
        this.nome = nome;
        this.userName = userName;
        this.online = online;
        this.avatar = avatar;
        this.avatarIcone = avatarIcone;
    }

    // Getters
    public getNome(): string {
        return this.nome;
    }

    public getUserName(): string {
        return this.userName;
    }

    public getOnline(): boolean {
        return this.online;
    }

    public getAvatar(): string {
        return this.avatar;
    }

    public getAvatarIcone(): string[] {
        return this.avatarIcone;
    }



}
