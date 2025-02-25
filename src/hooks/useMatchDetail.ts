import React, { useEffect } from "react";
import { clientHooks } from "./clientHooks";
import { gql, useQuery } from "@apollo/client";

const getMatchDetail = gql`
  query getMatchDetail {
    getMatchDetail {
      info {
        endOfGameResult
        gameCreation
        gameDuration
        gameEndTimestamp
        gameId
        gameMode
        gameName
        gameStartTimestamp
        gameType
        gameVersion
        mapId
        platformId
        queueId
        tournamentCode
        teams {
          bans {
            championId
            pickTurn
          }
          objectives {
            baron {
              first
              kills
            }
            champion {
              first
              kills
            }
            dragon {
              first
              kills
            }
            horde {
              first
              kills
            }
            inhibitor {
              first
              kills
            }
            riftHerald {
              first
              kills
            }
            tower {
              first
              kills
            }
          }
          teamId
          win
        }
        participants {
          allInPings
          assistMePings
          assists
          baronKills
          bountyLevel
          champExperience
          champLevel
          championId
          championName
          commandPings
          championTransform
          consumablesPurchased
          challenges {
            AssistStreakCount
            baronBuffGoldAdvantageOverThreshold
            controlWardTimeCoverageInRiverOrEnemyHalf
            earliestBaron
            earliestDragonTakedown
            earliestElderDragon
            earlyLaningPhaseGoldExpAdvantage
            fasterSupportQuestCompletion
            fastestLegendary
            hadAfkTeammate
            highestChampionDamage
            highestCrowdControlScore
            highestWardKills
            junglerKillsEarlyJungle
            killsOnLanersEarlyJungleAsJungler
            laningPhaseGoldExpAdvantage
            legendaryCount
            maxCsAdvantageOnLaneOpponent
            maxLevelLeadLaneOpponent
            mostWardsDestroyedOneSweeper
            mythicItemUsed
            playedChampSelectPosition
            soloTurretsLategame
            takedownsFirst25Minutes
            teleportTakedowns
            thirdInhibitorDestroyedTime
            threeWardsOneSweeperCount
            visionScoreAdvantageLaneOpponent
            InfernalScalePickup
            fistBumpParticipation
            voidMonsterKill
            abilityUses
            acesBefore15Minutes
            alliedJungleMonsterKills
            baronTakedowns
            blastConeOppositeOpponentCount
            bountyGold
            buffsStolen
            completeSupportQuestInTime
            controlWardsPlaced
            damagePerMinute
            damageTakenOnTeamPercentage
            dancedWithRiftHerald
            deathsByEnemyChamps
            dodgeSkillShotsSmallWindow
            doubleAces
            dragonTakedowns
            legendaryItemUsed
            effectiveHealAndShielding
            elderDragonKillsWithOpposingSoul
            elderDragonMultikills
            enemyChampionImmobilizations
            enemyJungleMonsterKills
            epicMonsterKillsNearEnemyJungler
            epicMonsterKillsWithin30SecondsOfSpawn
            epicMonsterSteals
            epicMonsterStolenWithoutSmite
            firstTurretKilled
            firstTurretKilledTime
            flawlessAces
            fullTeamTakedown
            gameLength
            getTakedownsInAllLanesEarlyJungleAsLaner
            goldPerMinute
            hadOpenNexus
            immobilizeAndKillWithAlly
            initialBuffCount
            initialCrabCount
            jungleCsBefore10Minutes
            junglerTakedownsNearDamagedEpicMonster
            kda
            killAfterHiddenWithAlly
            killedChampTookFullTeamDamageSurvived
            killingSprees
            killParticipation
            killsNearEnemyTurret
            killsOnOtherLanesEarlyJungleAsLaner
            killsOnRecentlyHealedByAramPack
            killsUnderOwnTurret
            killsWithHelpFromEpicMonster
            knockEnemyIntoTeamAndKill
            kTurretsDestroyedBeforePlatesFall
            landSkillShotsEarlyGame
            laneMinionsFirst10Minutes
            lostAnInhibitor
            maxKillDeficit
            mejaisFullStackInTime
            moreEnemyJungleThanOpponent
            multiKillOneSpell
            multikills
            multikillsAfterAggressiveFlash
            multiTurretRiftHeraldCount
            outerTurretExecutesBefore10Minutes
            outnumberedKills
            outnumberedNexusKill
            perfectDragonSoulsTaken
            perfectGame
            pickKillWithAlly
            poroExplosions
            quickCleanse
            quickFirstTurret
            quickSoloKills
            riftHeraldTakedowns
            saveAllyFromDeath
            scuttleCrabKills
            shortestTimeToAceFromFirstTakedown
            skillshotsDodged
            skillshotsHit
            snowballsHit
            soloBaronKills
            soloKills
            stealthWardsPlaced
            survivedSingleDigitHpCount
            survivedThreeImmobilizesInFight
            takedownOnFirstTurret
            takedowns
            takedownsAfterGainingLevelAdvantage
            takedownsBeforeJungleMinionSpawn
            takedownsFirstXMinutes
            takedownsInAlcove
            takedownsInEnemyFountain
            teamBaronKills
            teamDamagePercentage
            teamElderDragonKills
            teamRiftHeraldKills
            tookLargeDamageSurvived
            turretPlatesTaken
            turretsTakenWithRiftHerald
            turretTakedowns
            twentyMinionsIn3SecondsCount
            twoWardsOneSweeperCount
            unseenRecalls
            visionScorePerMinute
            wardsGuarded
            wardTakedowns
            wardTakedownsBefore20M
          }
          damageDealtToBuildings
          damageDealtToObjectives
          damageDealtToTurrets
          damageSelfMitigated
          deaths
          detectorWardsPlaced
          doubleKills
          dragonKills
          eligibleForProgression
          enemyMissingPings
          enemyVisionPings
          firstBloodAssist
          firstBloodKill
          firstTowerAssist
          firstTowerKill
          gameEndedInEarlySurrender
          gameEndedInSurrender
          holdPings
          getBackPings
          goldEarned
          goldSpent
          individualPosition
          inhibitorKills
          inhibitorTakedowns
          inhibitorsLost
          item0
          item1
          item2
          item3
          item4
          item5
          item6
          itemsPurchased
          killingSprees
          kills
          lane
          largestCriticalStrike
          largestKillingSpree
          largestMultiKill
          longestTimeSpentLiving
          magicDamageDealt
          magicDamageDealtToChampions
          magicDamageTaken
          missions {
            playerScore0
            playerScore1
            playerScore2
            playerScore3
            playerScore4
            playerScore5
            playerScore6
            playerScore7
            playerScore8
            playerScore9
            playerScore10
            playerScore11
          }
          neutralMinionsKilled
          needVisionPings
          nexusKills
          nexusTakedowns
          nexusLost
          objectivesStolen
          objectivesStolenAssists
          onMyWayPings
          participantId
          playerScore0
          playerScore1
          playerScore2
          playerScore3
          playerScore4
          playerScore5
          playerScore6
          playerScore7
          playerScore8
          playerScore9
          playerScore10
          playerScore11
          pentaKills
          perks {
            statPerks {
              defense
              flex
              offense
            }
            styles {
              description
              selections {
                perk
                var1
                var2
                var3
              }
              style
            }
          }
          physicalDamageDealt
          physicalDamageDealtToChampions
          physicalDamageTaken
          placement
          playerAugment1
          playerAugment2
          playerAugment3
          playerAugment4
          playerSubteamId
          pushPings
          profileIcon
          puuid
          quadraKills
          riotIdGameName
          riotIdName
          riotIdTagline
          role
          sightWardsBoughtInGame
          spell1Casts
          spell2Casts
          spell3Casts
          spell4Casts
          subteamPlacement
          summoner1Casts
          summoner1Id
          summoner2Casts
          summoner2Id
          summonerId
          summonerLevel
          summonerName
          teamEarlySurrendered
          teamId
          teamPosition
          timeCCingOthers
          timePlayed
          totalAllyJungleMinionsKilled
          totalDamageDealt
          totalDamageDealtToChampions
          totalDamageShieldedOnTeammates
          totalDamageTaken
          totalEnemyJungleMinionsKilled
          totalHeal
          totalHealsOnTeammates
          totalMinionsKilled
          totalTimeCCDealt
          totalTimeSpentDead
          totalUnitsHealed
          tripleKills
          trueDamageDealt
          trueDamageDealtToChampions
          trueDamageTaken
          turretKills
          turretTakedowns
          turretsLost
          unrealKills
          visionScore
          visionClearedPings
          visionWardsBoughtInGame
          wardsKilled
          wardsPlaced
          win
        }
      }
      metadata {
        dataVersion
        matchId
        participants
      }
    }
  }
`;
export default () => {
  const { loading, error, data } = useQuery(getMatchDetail);

  return [loading, error, data];
};
