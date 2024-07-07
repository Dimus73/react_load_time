export const performanceCallback = (
    id, // ID профилируемого компонента, для идентификации компонента.
    phase, // Фаза рендеринга ("mount" или "update").
    actualDuration, // Время, затраченное на рендеринг компонента и его поддерева.
    baseDuration, // Время, которое занял бы рендеринг всего поддерева, если бы не использовался кэш.
    startTime, // Время начала рендеринга.
    commitTime, // Время, когда изменения были зафиксированы.
    interactions // Уникальные "взаимодействия", происходящие во время этого рендеринга.

) => {
    console.log('+++++++++++++++++++++++++++')
    console.log(`${id} ${phase} phase:`);
    console.log(`Actual duration: ${actualDuration}`);
    console.log(`Base duration: ${baseDuration}`);
    console.log(`startTime: ${startTime}`);
    console.log(`commitTime: ${commitTime}`);
    console.log(`interactions: ${interactions}`);
    console.log('---------------------------')
}