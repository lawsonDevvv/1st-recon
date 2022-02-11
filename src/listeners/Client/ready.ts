import { ApplyOptions } from "@sapphire/decorators";
import { Events, Listener, ListenerOptions } from "@sapphire/framework";
import type { Guild } from "discord.js";

@ApplyOptions<ListenerOptions>({
    event: Events.ShardReady
})
export default class extends Listener {
    run(shard: number, unavailableGuilds: Set<string> | undefined) {
        if (!unavailableGuilds)
            this.container.logger.info(`Shard ${shard} ready.`);
        else
            this.container.logger.warn(`Shard ${shard} is trying to start, there's some guilds that it can't access.`);
            unavailableGuilds?.forEach((x) => {
                this.container.logger.warn(`|__ ${(this.container.client.guilds.cache.get(`${x}`) as Guild).name} (${x})`)    
            })
    }
}